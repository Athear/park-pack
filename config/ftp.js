const Client = require("ftp")
require('dotenv').config();

const options = {
    host: process.env.FTP_HOST,
    user: process.env.FTP_USER,
    password: process.env.FTP_PASS,
    port: process.env.FTP_PORT,
    secure: false
}

const initialize = async () =>{
    const client = new Client();
    client.connect(options)
    console.log('ftp connnected')

    return client;
}

module.exports = {initialize};