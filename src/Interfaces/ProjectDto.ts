import type { LanguageDto } from "./LanguageDTO";
import type { ProjectSummaryDto } from "./ProjectSummaryDto";
import type { ToolDto } from "./ToolDTO";

export interface ProjectDto {
  id: number;
  name: string;
  projectUrl: string | undefined;
  featured: boolean;
  summary: ProjectSummaryDto[];
  languages: LanguageDto[];
  tools: ToolDto[];
}
