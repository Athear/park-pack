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

const testFilePath = async () =>{
    const client = await ftp.initialize();
    client.cwd('/1',(err,currentDir)=>{
        if (err){
            // console.log(typeof err.message);
            if(err.message.includes('No such file or directory')){
                console.log('ftp err')
            }else{
                console.log(err);
            }
        } 
        console.log(currentDir);
        client.end();
    })
}

const findFilePath = async () =>{
    const client = await ftp.initialize();

    const logger = await client.chdir('/3');
    console.log(logger)
    client.pwd((err,currentDir)=>{
        if (err) console.log(err);
        console.log(currentDir);
        client.end();
    });

}

const doNewFile = async () =>{
    const location = 'user-5'
    const sourceFile = 'README.md'
    const targetFile = 'here_is_a_thing.md'

    const client = await ftp.initialize();
    const loc = await client.chdir(location);
    const thing = await client.write(sourceFile,targetFile);
    
    console.log(loc);
    console.log(thing);
    client.end();
}

// testRun();
// testFilePath();
// findFilePath();
doNewFile();