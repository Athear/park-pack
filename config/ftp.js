const Client = require("ftp");
const fs = require('fs');
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

//move into or create the remote directory
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

//write a file at the current directory
Client.prototype.write = function(source,target){
    return new Promise((resolve,reject)=>{
        this.put(source,target,(err)=>{
            if (err) reject(new Error(err));
            resolve(target+' created');
        });
    });
}


//Get a (remote) file from a path relative to remote root.
//Places (local) file at the same path relative to localRoot variable.
//returns 'No such file or directory' if file doesn't exist
//returns the file path of the local file on success
Client.prototype.readOne = function(path,fileName){
    const localRoot = './public/ftpTemp/'+path
    const localFull = `${localRoot}/${fileName}`
    const remoteFull = `/${path}/${fileName}`

    return new Promise((resolve,reject)=>{
        this.get(remoteFull,(err,filestream)=>{
            if (err) reject(new Error(err));
            try{
                fs.mkdirSync(localRoot, { recursive: true });
                const writer = fs.createWriteStream(localFull)
                writer.on('error',(writeErr)=>reject(new Error(writeErr)))
                filestream.pipe(writer);
            }
            catch(err){
                reject(new Error(err));
            }
            resolve(localRoot);
        });
    });
}

module.exports = {initialize};