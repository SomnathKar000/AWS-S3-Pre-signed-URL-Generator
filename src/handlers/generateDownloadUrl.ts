import { APIGatewayProxyEvent } from "aws-lambda";
import { getUrl } from "../services/s3Service";
import { errorResponse } from "../utils/errorHandler";
import { successResponse } from "../utils/response";

export const handler = (event: APIGatewayProxyEvent) => {
  // const { fileName } = JSON.parse(event.body!);
  // if (!fileName) {
  //   return errorResponse("fileName is required", 400);
  // }
  // const url = getUrl(fileName, "getObject");
  // return successResponse({
  //   message: "Successfully generated presigned URL",
  // url,
  // });
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Successfully generated presigned URL" }),
  };
};
