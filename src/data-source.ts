import { DataSource } from "typeorm";
import { UsersRecruiter } from "./shared/entities/userRecruiter.entity";
const dotenv = require("dotenv");
dotenv.config();

export const AppDataSource = new DataSource({
    type: "mongodb",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT!),
    database: process.env.DB_NAME,
    useUnifiedTopology: true,
    synchronize: true, //Se necesita para que las claves sean realmente unicas
    logging: true,
    entities: [UsersRecruiter],
});
