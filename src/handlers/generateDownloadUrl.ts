import { APIGatewayProxyEvent } from "aws-lambda";
import { getDownloadUrl } from "../services/s3Service";
import { errorResponse } from "../utils/errorHandler";
import { successResponse } from "../utils/response";

export const handler = async (event: APIGatewayProxyEvent) => {
  const { fileName } = JSON.parse(event.body!);
  if (!fileName) {
    return errorResponse("fileName is required", 400);
  }
  try {
    const url = await getDownloadUrl(fileName);
    const message = "Successfully generated presigned URL";
    return successResponse({ message, fileName, url });
  } catch (error) {
    return errorResponse(JSON.stringify(error), 500);
  }
};
