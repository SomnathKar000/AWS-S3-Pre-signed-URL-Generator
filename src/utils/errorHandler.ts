import { APIGatewayProxyResult } from "aws-lambda";

export const errorResponse = (
  message: string,
  statusCode: number
): APIGatewayProxyResult => {
  return {
    statusCode: statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({ message, success: false }),
  };
};
