import { CreateUserRequest, GetUserResponse } from "../domain/schemas";

export type User = GetUserResponse;
export type Users = GetUserResponse[]
export type UserInputs = CreateUserRequest;