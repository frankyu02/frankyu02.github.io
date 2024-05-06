import type { ExperienceDto } from "../Interfaces/ExperienceDTO";

export async function GetExperience(
  pagenumber: number = 1,
  contentPerPage: number = 3
): Promise<ExperienceDto[]> {
  const res = await fetch(
    `${
      import.meta.env.VITE_API_URL
    }/experience?pageNumber=${pagenumber}&limit=${contentPerPage}`
  );
  if (res.ok) {
    return await res.json();
  } else {
    throw new Error("request failed");
  }
}
