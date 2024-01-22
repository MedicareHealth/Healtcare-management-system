import { ConfigInterface } from "./config.interface";

const config: ConfigInterface = {
    ENVIRONMENT: "demo",
    MONGO_DB: {
        USELOCAL: false,
        USERNAME: "",
        PASSWORD: "",
        DBNAME: "",
        HOSTPORT: "",
        URLPARAMS: "",
        PEM_FILE_PATH: "",
        LOCALURL: "mongodb://localhost:27017/db_name",
    },
    FRONT_URL: "https://demo.internal.__name__.com",
    BACKEND_URL: "https://demo-api.internal.__name__.com",
    JWT: {
        JWT_USER_SECRET: "",
        JWT_ADMIN_SECRET: "",
        JWT_USER_EXPIRY_TIME: "60m",
        JWT_ADMIN_EXPIRY_TIME: "60m",
    },
    AWS: {
        BUCKET_NAME: "",
        IAM_USER_KEY: "",
        IAM_USER_SECRET: "",
        FOLDER_NAME: "",
        REGION: "",
        S3_TEMP_BUCKET_NAME: "",
        SES_SMTP_ENDPOINT: "",
        SES_SMTP_TLSWRAPPERPORT: 465,
        SES_USERNAME: "",
        SES_PASSWORD: "",
    },
    RAZORPAY: {
        KEY_ID: "",
        SECRET_KEY: "",
    }
};

export default config;
