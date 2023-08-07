import { APIGatewayProxyEvent } from "aws-lambda";
import { successResponse } from "../utils/response";
import { errorResponse } from "../utils/errorHandler";
import { getUrl } from "../services/s3Service";

export const handler = (event: APIGatewayProxyEvent) => {
  return successResponse({
    message: "Successfully generated presigned URL",
  });
};
