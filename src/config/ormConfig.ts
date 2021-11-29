import { ConnectionOptions } from "typeorm"
import {StudentEntity} from "../entity/Student.entity";


const connectionOptions: ConnectionOptions = {
    type: "postgres",
    database: "pg_node",
    synchronize: true,
    logging: true,
    entities: ["./model/entity/*.*"],
    host: process.env.DB_ENDPOINT || "localhost",
    port: 5432,
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "1212"
}

export default connectionOptions