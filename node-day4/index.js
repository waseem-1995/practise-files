const http=require("http")
const fs=require("fs")

const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.setHeader("Content-type","text/html")
        res.end(" <h1>this is home page</h1> ")
    }else if(req.url=="/about"){
        res.end("this is about page ")
    }else if(req.url=="/data"){
        try {
            const data=fs.readFileSync("./data.json","utf-8")
            res.end(data)
        } catch (error) {
                res.end(error)
        }
      
    }else if(req.url=="/writedata"){
        try {
            fs.writeFileSync("./text.txt","learning server logic")
            res.end("data has been written in txt file")
        } catch (error) {
            res.end(error)
        }
      
    }
})

server.listen(4500,()=>{
 console.log("port is running at 4500")
})