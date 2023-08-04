import { APIGatewayProxyResult } from "aws-lambda";

export const successResponse = (body: any): APIGatewayProxyResult => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({ ...body, success: true }),
  };
};
