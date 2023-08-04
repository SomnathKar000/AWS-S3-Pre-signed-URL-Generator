import { APIGatewayProxyResult } from "aws-lambda";

export const successResponse = (body: any): APIGatewayProxyResult => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT,DELETE",
      "Access-Control-Allow-Headers": "Content-Type",
    },
    body: JSON.stringify({ ...body, success: true }),
  };
};
