const url = process.env.API_URL;
let path = !!url ? url : "http://localhost:3000";

const config = {
    server: path
}

export default config;