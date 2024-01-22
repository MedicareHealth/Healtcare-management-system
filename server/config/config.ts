import { ConfigInterface } from "./config.interface";

const config: ConfigInterface = {
    ENVIRONMENT: "dev",
    MONGO_DB: {
        USELOCAL: true,
        USERNAME: "",
        PASSWORD: "",
        DBNAME: "sustainiam-db-local",
        //No Slash at the end
        HOSTPORT: "",
        //No Slash at the beginning
        URLPARAMS: "?tls=true&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false",
        PEM_FILE_PATH: "global-bundle.pem",
        LOCALURL: "mongodb://127.0.0.1:27017/sustainiam-db-local",
    },
    FRONT_URL: "http://localhost:3000",
    BACKEND_URL: "http://localhost:4000",
    JWT: {
        JWT_USER_SECRET: "hrc43u949c6n79gg679hjh6jh6j78s",
        JWT_TEAM_SECRET: "jni3uf5ton3unft4uft3fo4uuihuu3",
        JWT_USER_EXPIRY_TIME: "10m",
        JWT_ADMIN_EXPIRY_TIME: "60m",
        JWT_USER_AUDIENCE: "Sustainiam_User",
        JWT_TEAM_AUDIENCE: "Sustainiam_Team",
        JWT_ISSUER: "https://sustainiam.com",
    },
    AWS: {
        BUCKET_NAME: "sustainiam-system-non-production-files",
        // sustainiam-backend-dev-environment-key
        IAM_USER_KEY: "AKIAQ2UXP6UUKZCYBSSU",
        IAM_USER_SECRET: "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",
        FOLDER_NAME: "dev",
        REGION: "ap-south-1",
        S3_TEMP_BUCKET_NAME: "temp-auto-deletes-after-24-hours",
        SES_SMTP_ENDPOINT: "email-smtp.ap-south-1.amazonaws.com",
        SES_SMTP_TLSWRAPPERPORT: 465,
        // ses-dev-local
        SES_USERNAME: "AKIAQ2UXP6UUIGNO5K2V",
        SES_PASSWORD: "BHP8s8R8C4UlwfMzNpb27cL1VmKk3IAEnkzkQ2XTg81t",
    },
    SENDGRID: {
        // sustainiam-dev
        SENDGRID_API_KEY: "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",
        FROM_EMAIL: "noreply-dev@sustainiam.com",
        SENDER_NAME: "Sustainiam Dev",
    },
    BREVO: {
        PORT: 587,
        HOST: "smtp-relay.brevo.com",
        PASSWORD: "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",
        FROM_EMAIL: "noreply-dev@sustainiam.com",
        USERNAME: "pranav@sustainiam.com",
    },
    TOTP: {
        step: 30,
        //window starts with 0
        window: 3, // 2 minutes  (step * (window + 1))
    },
    IS_BACKUP_EMAIL_SERVICE_ENABLED: false,
    PUSHER: {
        APP_ID: "1700055",
        KEY: "534c12ef28aef46684b5",
        SECRET: "f0323a0a8f9e20ca50bc",
        CLUSTER: "ap2",
        USE_TLS: true,
    },
    ZOHO: {
        CLIENT_ID: "1000.KWDYU05Q08UQX70Q1BJCSD09FPHJBB",
        CLIENT_SECRET: "c69dd03615650b00c4a347e622e05cdabf2a9cb5c2",
        REFRESH_TOKEN: "1000.b9bc2a1d2b7dd3dacecb80f03a5c0957.51d146eeb5522489f700d88fbe82d6d3"
    },
    INTERNAL_BUSINESS_TEAM: {
        EMAIL: "example@sustainiam.com"
    },
    RAZORPAY: {
        KEY_ID: "rzp_test_GDgBlU7jOP0Jdp",
        SECRET_KEY: "02irqijQ2p3clVmTUc6SCC3o",
    }
};

export default config;