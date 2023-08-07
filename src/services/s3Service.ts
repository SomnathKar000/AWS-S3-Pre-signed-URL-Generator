import { S3 } from "aws-sdk";
const s3 = new S3();
const bucketName = process.env.S3_BUCKET_NAME!;

export const getUrl = (key: string, type: string): Promise<string> => {
  const url = s3.getSignedUrlPromise(type, {
    Bucket: bucketName,
    Key: key,
    Expires: 60 * 5,
  });
  return url;
};
