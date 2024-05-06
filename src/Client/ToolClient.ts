import type { ToolDto } from "../Interfaces/ToolDTO";

export async function GetTools(): Promise<ToolDto[]> {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/tool?skip=0&limit=50`
  );
  if (res.ok) {
    return await res.json();
  } else {
    throw new Error("request failed");
  }
}
