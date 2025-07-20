
import jsonServer from "json-server";
import cors from "cors";
import { config } from "dotenv";
import chalk from "chalk";

const server =jsonServer.create();
const route= jsonServer.router("jsondata.json");
const alloMethod=jsonServer.defaults();

config();

server.use(cors());
server.use(alloMethod);
server.use(route);

const PORT=process.env.PORT || 30001;
const HOST=process.env.HOST || "127.0.0.1";

server.listen(PORT,()=>{
    console.log(`😒Server is running on : ${chalk.cyan(`http://${HOST}:${PORT}`)}`);
})
