import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mongodb",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT!),
    database: process.env.DB_NAME,
    useUnifiedTopology: true,
    synchronize: false,
    logging: true,
    entities: [],
});
