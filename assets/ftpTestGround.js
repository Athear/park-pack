const ftp = require('../config/ftp');


const testRun = async () =>{
    const client = await ftp.initialize();
    try{
        // if(!ftp.initialized){
        //     await ftp.initialize();
        // }else if(client.closed){
        //     await client.connect();
        // }
        // client.on('ready',()=>{
        console.log('ready');
        client.put('README.md','README_FTP.md',(err)=>{
            if (err) throw err;
            console.log('PUT!')
        });
    // });
        client.end();
    }
    catch(err){
        console.log(err);
    }
}

testRun();