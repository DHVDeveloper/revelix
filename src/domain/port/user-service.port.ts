import { ApiResponse } from "@/types/api-response.interface";

export type UserServices = {
  userFilms: () => Promise<ApiResponse<void>>
}