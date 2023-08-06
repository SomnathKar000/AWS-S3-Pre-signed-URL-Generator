import { APIGatewayProxyResult } from "aws-lambda";

export const successResponse = (body: any): APIGatewayProxyResult => {
  return {
    statusCode: 200,
    body: JSON.stringify({ ...body, success: true }),
  };
};
