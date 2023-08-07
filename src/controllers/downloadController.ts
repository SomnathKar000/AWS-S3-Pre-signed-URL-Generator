import { Request, Response } from "express";

export const downloadController = (req: Request, res: Response) => {
  res.send("download");
};
