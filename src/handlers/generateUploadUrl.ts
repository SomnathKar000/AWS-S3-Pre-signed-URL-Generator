export const handler = async () => {
  console.log("Go Serverless v1.0! Your function executed successfully!");
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v1.0! Your function executed successfully!",
      },
      null,
      2
    ),
  };
};
