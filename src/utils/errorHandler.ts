import { APIGatewayProxyResult } from "aws-lambda";

export const errorResponse = (
  message: string,
  statusCode: number
): APIGatewayProxyResult => {
  return {
    statusCode: statusCode,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT,DELETE",
      "Access-Control-Allow-Headers": "Content-Type",
    },
    body: JSON.stringify({ message, success: false }),
  };
};
