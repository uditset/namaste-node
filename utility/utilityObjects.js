import { readFileSync } from "fs";

export const options = {
    key: readFileSync('./utility/key.pem'),
    cert: readFileSync('./utility/cert.pem'),
}