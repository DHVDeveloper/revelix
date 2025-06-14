import { ApiResponse } from "@/types/api-response.interface";

export type AuthServices = {
  login: (email: string, password: string) => Promise<ApiResponse<void>>
  logout: () => Promise<ApiResponse<void>>
};