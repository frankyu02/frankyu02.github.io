import type { ProjectDto } from "../Interfaces/ProjectDto";

export async function GetFeaturedProjects(): Promise<ProjectDto[]> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/project/featured`);
  if (res.ok) {
    return await res.json();
  } else {
    throw new Error("request failed");
  }
}
