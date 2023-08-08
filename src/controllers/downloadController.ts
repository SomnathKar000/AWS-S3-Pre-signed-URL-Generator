import { Request, Response } from "express";
import { CustomError } from "../middleware/customError";
import { getUrl } from "../services/s3Service";

export const downloadController = async (req: Request, res: Response) => {
  const { fileName }: { fileName: string } = req.body;

  if (!fileName) {
    throw new CustomError("File name is required", 400);
  }

  const url = await getUrl(fileName, "getObject");

  res.status(200).json({
    message: "Successfully generated presigned URL",
    url,
  });
};
