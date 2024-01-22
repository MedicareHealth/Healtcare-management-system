export interface ConfigInterface {
    ENVIRONMENT: string;
    MONGO_DB: {
        USELOCAL: boolean;
        USERNAME: string;
        PASSWORD: string;
        DBNAME: string;
        HOSTPORT: string;
        URLPARAMS: string;
        PEM_FILE_PATH: string;
        LOCALURL: string;
    };
    FRONT_URL: string;
    BACKEND_URL: string;
    JWT: {
        JWT_USER_SECRET: string;
        JWT_ADMIN_SECRET: string;
        JWT_USER_EXPIRY_TIME: string;
        JWT_ADMIN_EXPIRY_TIME: string;
    };
    AWS: {
        BUCKET_NAME: string;
        IAM_USER_KEY: string;
        IAM_USER_SECRET: string;
        FOLDER_NAME: string;
        REGION: string;
        S3_TEMP_BUCKET_NAME: string;
        SES_SMTP_ENDPOINT: string;
        SES_SMTP_TLSWRAPPERPORT: number;
        SES_USERNAME: string;
        SES_PASSWORD: string;
    };
    RAZORPAY: {
        KEY_ID: string;
        SECRET_KEY: string;
    }
}
