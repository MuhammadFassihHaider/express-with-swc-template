import dotenv from "dotenv";

export const getEnvironmentVariables = () => {
    dotenv.config();
    return {
        port: +(process.env.PORT ?? ""),
    };
};
