import { CreateUserRequest, GetUserResponse } from "./schemas";

export type User = GetUserResponse;
export type Users = GetUserResponse[]
export type UserInputs = CreateUserRequest;