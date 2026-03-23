import React, { LegacyRef } from "react";

export interface CreateUserPayload {
  username: string;
  password: string;
  email: string;
}

export interface InputsError {
  username?: string;
  password?: string;
  email?: string;
}

export interface CreateUserFormProps {
  formRef: React.RefObject<HTMLFormElement>;
  executeSubmit: () => void;
  handleSave: (data: CreateUserPayload, e?: React.FormEvent<HTMLFormElement>) => void;
  inputErrors: Partial<Record<keyof InputsError, string>>;
  isPending: boolean;
  isError: boolean;
  error: any;
  reset: () => void;
}


export interface UserFormProps {
  formRef: LegacyRef<HTMLFormElement>;
  handleSave: (data: CreateUserPayload, e?: React.FormEvent<HTMLFormElement>) => void;
  inputErrors: InputsError
}


