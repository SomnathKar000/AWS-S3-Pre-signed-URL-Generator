import { APIGatewayProxyEvent } from "aws-lambda";
import { getDownloadUrl } from "../services/s3Service";
import { errorResponse } from "../utils/errorHandler";
import { successResponse } from "../utils/response";

export const handler = async (event: APIGatewayProxyEvent) => {
  const fileName = JSON.parse(event.body!).fileName;
  if (!fileName) {
    return errorResponse("Invalid file path", 400);
  }
  const url = await getDownloadUrl(fileName);
  const message = "Successfully generated presigned URL";       
  return successResponse({ message, url });
};
