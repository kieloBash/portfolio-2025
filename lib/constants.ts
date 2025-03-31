export type ProjectType =
  | "bnk"
  | "trainerhub"
  | "purrfecthealth"
  | "lookback"
  | "grantbox"
  | "lizboutique";

export const getProject = (project: ProjectType) => {
  const projects: Record<ProjectType, string> = {
    bnk: "",
    trainerhub: "",
    purrfecthealth: "",
    lookback: "",
    grantbox: "",
    lizboutique: "",
  };
  return projects[project];
};
