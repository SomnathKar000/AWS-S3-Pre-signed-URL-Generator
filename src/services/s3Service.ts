import { S3 } from "aws-sdk";
const s3 = new S3();
const bucketName = process.env.S3_BUCKET_NAME!;

export const getUploadUrl = (key: string, contentType: string) => {
  const url = s3.getSignedUrlPromise("putObject", {
    Bucket: bucketName,
    Key: key,
    Expires: 60 * 5,
    ContentType: contentType,
  });
  return url;
};

export const getDownloadUrl = (key: string) => {
  const url = s3.getSignedUrlPromise("getObject", {
    Bucket: bucketName,
    Key: key,
    Expires: 60 * 5,
  });
  return url;
};
