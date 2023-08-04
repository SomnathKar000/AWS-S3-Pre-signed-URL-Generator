import { APIGatewayProxyResult } from "aws-lambda";

export const errorResponse = (
  message: string,
  statusCode: number
): APIGatewayProxyResult => {
  return {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST",
      "Access-Control-Allow-Headers": "Content-Type",
    },
    body: JSON.stringify({ message, success: false }),
  };
};
