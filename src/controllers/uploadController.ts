import { Request, Response } from "express";

export const uploadController = (req: Request, res: Response) => {
  res.send("upload");
};
