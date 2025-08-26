export interface DashboardInitialState {
  name: string;
  isLoading: boolean;
  error: boolean | null;
  status: "idle" | "loading" | "failed";
  data: {
    id: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    widgets: Array<{
      id: string;
      type: string;
      data: any;
    }>;
  };
}

export const dashboardInitialState: DashboardInitialState = {
  name: "",
  isLoading: false,
  error: null,
  status: "idle",
  data: {
    id: "",
    name: "",
    description: "",
    createdAt: "",
    updatedAt: "",
    widgets: [],
  },
};
