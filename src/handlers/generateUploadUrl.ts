import { APIGatewayProxyEvent } from "aws-lambda";
import { successResponse } from "../utils/response";
import { errorResponse } from "../utils/errorHandler";
import { getUploadUrl } from "../services/s3Service";

export const handler = async (event: APIGatewayProxyEvent) => {
  const fileName = JSON.parse(event.body!).fileName;
  if (!fileName) {
    return errorResponse("Invalid file path", 400);
  }
  const url = await getUploadUrl(fileName);
  const message = "Go Serverless v1.0! Your function executed successfully!";
  return successResponse({ message, fileName, url });
};
