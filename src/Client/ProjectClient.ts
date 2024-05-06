import type { ProjectDto } from "../Interfaces/ProjectDto";

export async function GetFeaturedProjects(): Promise<ProjectDto[]> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/project/featured`);
  if (res.ok) {
    return await res.json();
  } else {
    throw new Error("request failed");
  }
}

export async function GetProjects(
  skip: number = 0,
  limit: number = 10
): Promise<ProjectDto[]> {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/project?skip=${skip}&limit=${limit}`
  );
  if (res.ok) {
    return await res.json();
  } else {
    throw new Error("request failed");
  }
}

export async function GetProjectsByLanguage(
  language: string
): Promise<ProjectDto[]> {
  const res = await fetch(
    `${
      import.meta.env.VITE_API_URL
    }/project/language?language=${encodeURIComponent(language)}`
  );
  if (res.ok) {
    return await res.json();
  } else {
    throw new Error("request failed");
  }
}

export async function GetProjectsByTool(tool: string): Promise<ProjectDto[]> {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/project/tool?tool=${encodeURIComponent(
      tool
    )}`
  );
  if (res.ok) {
    return await res.json();
  } else {
    throw new Error("request failed");
  }
}
