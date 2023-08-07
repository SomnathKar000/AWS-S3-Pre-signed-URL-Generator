import { bucketName, aws } from "../config/aws";

const s3 = new aws.S3();

export const getUrl = (key: string, type: string): Promise<string> => {
  const url = s3.getSignedUrlPromise(type, {
    Bucket: bucketName,
    Key: key,
    Expires: 60 * 5,
  });
  return url;
};
