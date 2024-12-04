import { PostOne } from "../../../shared/models/custom.types";
import { LoginResponse } from "../models";

export type LoginFormData = {
  login: string;
  password: string;
};

export type PostOneUser = PostOne<LoginFormData, LoginResponse>;
