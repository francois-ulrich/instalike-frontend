import { StorageValue } from "../../../shared/types";

export type User = {
  id: number;
  name: string;
  email: string;
};

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
}
