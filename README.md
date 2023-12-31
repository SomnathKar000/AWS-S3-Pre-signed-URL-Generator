# AWS-S3-Pre-signed-URL-Generator

This project provides an Express API to generate pre-signed URLs for uploading and downloading files to/from Amazon S3 buckets. It utilizes TypeScript for type safety and integrates with AWS SDK for interacting with Amazon S3.

## Features

- Generate pre-signed URLs for uploading and downloading files to/from Amazon S3.
- Built with Express and TypeScript for better code organization and type safety.
- Utilizes AWS SDK to interact with Amazon S3.
- Error handling and custom error classes for better error management.
- CORS support for cross-origin resource sharing.
- Easy deployment using Vercel.

## Usage

1. Install dependencies:

   ```
   npm install
   ```

2. Set up AWS Credentials:

   - Create an IAM user in your AWS account.
   - Attach the `AmazonS3FullAccess` policy to the IAM user.
   - Note down the Access Key ID and Secret Access Key of the IAM user.

3. Configure Environment Variables:

   Create a `.env` file in the project root and add the following environment variables:

   ```
   AWS_ACCESS_KEY_ID=your-access-key-id
   AWS_SECRET_ACCESS_KEY=your-secret-access-key
   AWS_REGION=your-region
   S3_BUCKET_NAME=your-bucket-name
   ```

4. Run the development server:

   ```
   npm run dev
   ```

5. API Endpoints:

   - `POST /api/v1/upload`: Generate a pre-signed URL for uploading a file to Amazon S3.
     Request Body: `{ "fileName": "example.jpg" }`

   - `POST /api/v1/download`: Generate a pre-signed URL for downloading a file from Amazon S3.
     Request Body: `{ "fileName": "unique-file-id/example.jpg" }`
     (Use the unique file name obtained after uploading)

6. Deployed API Base URL: [https://aws-s3-pre-signed-url-generator.vercel.app](https://aws-s3-pre-signed-url-generator.vercel.app)

7. Frontend Application: [React S3 Pre-Signed URL Test](https://react-s3-pre-signed-url-test.vercel.app/)
   This frontend application allows you to test the API through a web page.

## Configuration

- Set your AWS credentials and S3 bucket name in the `.env` file.

## IAM User Permissions

Make sure the IAM user used for this project has the `AmazonS3FullAccess` policy attached to ensure proper functionality.

## Contributing

Contributions are welcome! Feel free to open issues and pull requests.
