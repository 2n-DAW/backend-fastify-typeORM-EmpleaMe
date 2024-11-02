import 'reflect-metadata';
import Fastify from "fastify";
import cors from "@fastify/cors";
import { AppDataSource } from "../data-source";
import userRecruiterRoutes from "../userRecruiter/userRecruiter.router";
const dotenv = require("dotenv");
dotenv.config();

const app = Fastify({ logger: true });
app.register(cors, {
    origin: (origin, callback) => {
        const urls_allowed = process.env.CORS_URLS!.split(","); //!posible error

        //comprobamos que la url se encuentre en el array
        if (!origin || !urls_allowed.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("No permitido por CORS"), false);
        }
    }
});

app.register(userRecruiterRoutes);

const start = async () => {
    try {
        const port = parseInt(process.env.PORT!);
        await AppDataSource.initialize();
        app.log.info("Database connected!");
        await app.listen({ port });
        app.log.info(`Server running at http://localhost:${port}`);
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};

start();