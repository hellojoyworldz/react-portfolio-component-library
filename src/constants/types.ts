import { design } from "./design";

export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type TextTag = "p" | "div" | "span" | "strong" | "em" | "label" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type PredefinedFontFamily = keyof typeof design.fontFamily;
export type PredefinedFontWeight = keyof typeof design.fontWeight;
export type PredefinedFontSize = keyof typeof design.fontSize;
export type PredefinedFontStyle = keyof typeof design.fontStyle;
export type PredefinedLineHeight = keyof typeof design.lineHeight;
export type PredefinedLetterSpacing = keyof typeof design.letterSpacing;
export type PredefinedTextDecoration = keyof typeof design.textDecoration;
export type PredefinedTextTransform = keyof typeof design.textTransform;
export type PredefinedTextAlign = keyof typeof design.textAlign;
export type PredefinedWhiteSpace = keyof typeof design.whiteSpace;
export type PredefinedColors = keyof typeof design.colors;
export type PredefinedOpacity = keyof typeof design.opacities;

export interface designCommonType {
  fontFamily?: PredefinedFontFamily;
  fontWeight?: PredefinedFontWeight;
  fontSize?: PredefinedFontSize;
  fontStyle?: PredefinedFontStyle;
  lineHeight?: PredefinedLineHeight;
  letterSpacing?: PredefinedLetterSpacing;
  textDecoration?: PredefinedTextDecoration;
  textTransform?: PredefinedTextTransform;
  textAlign?: PredefinedTextAlign;
  whiteSpace?: PredefinedWhiteSpace;
  color?: PredefinedColors;
  opacity?: PredefinedOpacity;
}

export interface designTitleType extends designCommonType {
  highlightColor?: PredefinedColors;
}

export interface designTextType extends designCommonType {}

export interface designBadgeType extends designCommonType {
  badgeColor?: PredefinedColors;
  borderColor?: PredefinedColors;
  hoverColor?: PredefinedColors;
  hoverBadgeColor?: PredefinedColors;
}
