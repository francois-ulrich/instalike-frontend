import { AxiosResponse } from "axios";
import axiosClient from "../../../axiosClient";
import { LoginFormData } from "../custom-types";
import { LoginResponse } from "../models";

export async function getLoginFromApi(
  formLoginData: LoginFormData
): Promise<LoginResponse> {
  const { email, password } = formLoginData;

  const response = axiosClient.post<LoginResponse>("/api/auth/login", {
    email,
    password,
  });

  const result = await response;

  return result.data;
}

export async function getAuthenticatedUserFromApi(): Promise<
  AxiosResponse<LoginResponse>
> {
  const response = axiosClient.get<LoginResponse>("/api/auth/user");
  const result = await response;
  return result;
}
