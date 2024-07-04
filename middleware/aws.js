import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'eu-north',
});

const s3 = new AWS.S3();

const getFileFromS3 = async (key) => {
  const params = {
    Bucket: 'mern-social-media',
    Key: key,
  };

  try {
    const data = await s3.getObject(params).promise();
    return data.Body; // Return the file content (Buffer)
  } catch (error) {
    console.error('Error retrieving file from S3:', error);
    throw error;
  }
};

export default { s3, getFileFromS3 };
