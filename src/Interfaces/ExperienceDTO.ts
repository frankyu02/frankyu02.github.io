import type { ExperienceSummaryDto } from "./ExperienceSummaryDto";
import type { LanguageDto } from "./LanguageDTO";
import type { ToolDto } from "./ToolDTO";

export interface ExperienceDto {
  id: number;
  company: string;
  location: string;
  position: string;
  start: string;
  finish: string;
  summary: ExperienceSummaryDto[];
  languages: LanguageDto[];
  tools: ToolDto[];
}
