import { APIGatewayProxyEvent } from "aws-lambda";
import { successResponse } from "../utils/response";
import { errorResponse } from "../utils/errorHandler";

export const handler = async (event: APIGatewayProxyEvent) => {
  const { filePath } = JSON.parse(event.body!);
  if (!filePath) {
    return errorResponse("Invalid file path", 400);
  }
  const message = "Go Serverless v1.0! Your function executed successfully!";
  return successResponse({ message, filePath });
};
