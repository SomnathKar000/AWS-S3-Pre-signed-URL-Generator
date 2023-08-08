import { Request, Response } from "express";
import { CustomError } from "../middleware/customError";
import { getUrl } from "../services/s3Service";
import { v4 as uuidV4 } from "uuid";

export const uploadController = async (req: Request, res: Response) => {
  const { fileName }: { fileName: string } = req.body;
  if (!fileName) {
    throw new CustomError("File name is required", 400);
  }
  const uniqueFileName = `${uuidV4()}/${fileName}`;

  const url = await getUrl(uniqueFileName, "putObject");
  res.status(200).json({
    message: "Successfully generated presigned URL",
    url,
    fileName: uniqueFileName,
  });
};
