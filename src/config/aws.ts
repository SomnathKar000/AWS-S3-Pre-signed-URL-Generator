import aws from "aws-sdk";
import dotenv from "dotenv";
dotenv.config();

const bucketName = process.env.S3_BUCKET_NAME!;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID!;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY!;
const region = process.env.AWS_REGION!;

aws.config.update({
  accessKeyId,
  secretAccessKey,
  region,
});

export { aws, bucketName };
