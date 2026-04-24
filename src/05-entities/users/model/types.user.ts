import { CreateUserRequest, GetUserResponse } from "./schemas.user";

export type User = GetUserResponse;
export type Users = GetUserResponse[]
export type UserInputs = CreateUserRequest;