import dotenv from "dotenv";


export const config = () => {
    dotenv.config();

    const port = +(process.env.PORT ?? "")

    return {
      port
    }
};
