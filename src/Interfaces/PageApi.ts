export enum pages {
  home,
  language,
  tool,
  experience,
  projects,
}
export interface PageApi {
  page: pages;
  filter: string | undefined;
}
