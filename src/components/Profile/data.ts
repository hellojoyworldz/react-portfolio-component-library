export interface ProfileData {
  textpath?: string;
  footersbj?: string;
  info?: {
    name?: string;
    email?: string;
    phone?: string;
    portfolio?: string;
    github?: string;
    blog?: string;
  };
  photo?: string;
  notice?: string;
}

export const profileData: ProfileData = {
  textpath: "Welcome My Portfolio Site · Hello My World ·",
  footersbj: "IMPOSSIBLE IS NOTHING · ",
  info: {
    name: "My Portfolio",
  },
};

export const defaultTextPath: string = profileData.textpath || "";
export const defaultFootersbj: string = profileData.footersbj || "";
