import { Request, Response, NextFunction } from "express";
import { CustomError } from "./customError";

export const notFound = (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route does not exist",
  });
};

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }
  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
};
