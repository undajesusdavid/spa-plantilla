import z from "zod";

export const MePermissionsResponse = z.object({
  permissions: z.string().array(),
  roles: z.string().array(),
});