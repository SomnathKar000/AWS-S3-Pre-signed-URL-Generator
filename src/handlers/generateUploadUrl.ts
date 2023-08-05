import { APIGatewayProxyEvent } from "aws-lambda";
import { successResponse } from "../utils/response";
import { errorResponse } from "../utils/errorHandler";
import { getUploadUrl } from "../services/s3Service";

export const handler = async (event: APIGatewayProxyEvent) => {
  const { fileName, ContentType } = JSON.parse(event.body!);
  if (!fileName || !ContentType) {
    return errorResponse("Invalid request", 400);
  }

  const url = await getUploadUrl(fileName, ContentType);
  const message = "Successfully generated presigned URL";
  return successResponse({ message, fileName, url });
};
