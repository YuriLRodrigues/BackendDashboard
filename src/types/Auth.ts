import { Request } from "express";

export interface UserRequest extends Request {
  userId?: string
}

export type DecodedToken = {
  sub: string
}