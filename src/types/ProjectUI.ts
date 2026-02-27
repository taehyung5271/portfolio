export interface SkillUI {
  id: number;
  name: string;
  bgColor: string;
  txtColor: string;
}

export interface CommentUI {
  id: number;
  userNickname: string;
  content: string;
  createdAt: string;
}

export interface ProjectUI {
  id: number;
  title: string;
  projectIntro: string;
  memberCount: number;
  startDate: string;
  endDate?: string;
  serviceLink?: string;

  slug?: string;
  mdUrl?: string;
  logoUrl?: string;

  descriptions: string[];
  skills: SkillUI[];
  comments: CommentUI[];
}