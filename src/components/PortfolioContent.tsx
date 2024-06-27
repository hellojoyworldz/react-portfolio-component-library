import React, { useEffect, useRef, ElementType, ReactNode } from "react";
import gsap from "gsap";
import locomotiveScroll from "locomotive-scroll";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const PortfolioContent = <T extends ElementType = "main">({
  as,
  children,
  className,
}: {
  as?: T;
  children: ReactNode;
  className?: string;
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!scrollRef.current) return;

    if ("setAttribute" in scrollRef.current) {
      scrollRef.current.setAttribute("data-scroll-container", "");
    }

    // locomotive
    const scroll = new locomotiveScroll({
      el: scrollRef.current as HTMLElement,
      smooth: true,
    }) as any;

    scroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        return arguments.length
          ? scroll.scrollTo(value, 0, 0)
          : scroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollRef.current?.style.transform ? "transform" : "fixed",
    });

    // 가로스크롤
    const horizontalSections = document.querySelectorAll<HTMLElement>(
      "[data-horizontal-scroll]",
    );

    horizontalSections.forEach((horizontalSection) => {
      const pinWrap =
        horizontalSection.querySelector<HTMLElement>("[data-pin-wrap]");
      if (pinWrap) {
        const pinWrapWidth = pinWrap.offsetWidth;
        const horizontalScrollLength = pinWrapWidth - window.innerWidth;

        gsap.to(pinWrap, {
          scrollTrigger: {
            scroller: scrollRef.current,
            scrub: true,
            trigger: horizontalSection,
            pin: true,
            start: "top top",
            markers: false,
            end: () => `+=${pinWrapWidth}`,
            invalidateOnRefresh: true,
          },
          x: -horizontalScrollLength,
          ease: "none",
        });
      }
    });

    // 배경 색상 변경
    const scrollColorElems =
      document.querySelectorAll<HTMLElement>("[data-bgcolor]");

    scrollColorElems.forEach((colorSection, i) => {
      const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
      const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;

      ScrollTrigger.create({
        trigger: colorSection,
        scroller: scrollRef.current,
        start: "top 50%",
        onEnter: () =>
          gsap.to("body", {
            backgroundColor: colorSection.dataset.bgcolor,
            color: colorSection.dataset.textcolor,
            overwrite: "auto",
          }),
        onLeaveBack: () =>
          gsap.to("body", {
            backgroundColor: prevBg,
            color: prevText,
            overwrite: "auto",
          }),
      });
    });

    ScrollTrigger.addEventListener("refresh", () => {
      scroll.update();
    });
    ScrollTrigger.refresh();

    return () => {
      scroll.destroy();
    };
  }, []);

  const Component = as || "main";
  return (
    <Component id="content" ref={scrollRef} className={className || ""}>
      {children}
    </Component>
  );
};
