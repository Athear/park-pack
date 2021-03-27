const Client = require("ftp")
require('dotenv').config();

const options = {
    host: process.env.FTP_HOST,
    user: process.env.FTP_USER,
    password: process.env.FTP_PASS,
    port: process.env.FTP_PORT,
    secure: false
};

const initialize = async () =>{
    const client = new Client();
    client.connect(options)
    console.log('ftp connnected')

    return client;
};

Client.prototype.chdir = function (path){
    return new Promise((resolve,reject)=>{
        this.cwd(path,(err,currentDir)=>{
            if (err){
                if(err.message.includes('No such file or directory')){
                    this.mkdir(path,(err)=>{
                        if (err) throw err
                        this.cwd(path,(err,currentDir)=>{
                            if (err) throw err
                            resolve('Created and entered directory '+path)
                        });
                    })
                }else{
                    reject(new Error(err));
                }
            }
            else{
                resolve('Entered directory '+path)
            }
        })
    })
}

Client.prototype.write = function(source,target){
    return new Promise((resolve,reject)=>{
        this.put(source,target,(err)=>{
            if (err) reject(new Error(err));
            resolve(target+' created');
        });
    });
}

module.exports = {initialize};