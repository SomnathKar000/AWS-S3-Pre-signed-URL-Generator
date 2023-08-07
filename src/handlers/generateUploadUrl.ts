import { APIGatewayProxyEvent } from "aws-lambda";
import { successResponse } from "../utils/response";
import { errorResponse } from "../utils/errorHandler";
import { getUrl } from "../services/s3Service";

export const handler = (event: APIGatewayProxyEvent) => {
  // const { fileName } = JSON.parse(event.body!);
  // if (!fileName) {
  //   return errorResponse("fileName is required", 400);
  // }

  // const url = getUrl(fileName, "putObject");
  return successResponse({
    message: "Successfully generated presigned URL",
    // fileName,
    // url,
  });
};
