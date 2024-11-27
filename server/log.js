const fs=require("fs")
const{join}=require("path")
const {v4:getID}=require("uuid")

const log=(req,res,next)=>
{

fs.appendFile(join(__dirname,'Log.txt'),getID()+"   "+ req.headers.origin+"    " +req.path+"    "+ req.method+'\n',(err)=>
    {if(err)throw err;})


next()
}
module.exports={log}