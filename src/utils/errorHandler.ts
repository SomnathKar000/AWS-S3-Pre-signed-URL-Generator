import { APIGatewayProxyResult } from "aws-lambda";

export const errorResponse = (
  message: string,
  statusCode: number
): APIGatewayProxyResult => {
  return {
    statusCode: statusCode,
    body: JSON.stringify({ message, success: false }),
  };
};
