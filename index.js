import express from "express"
import cors from "cors"

const app = express()
app.use(cors())


app.get("/hello",(req,res)=>{
    res.send("life is good")
})

app.get("/",(req,res)=>{
    res.send("welcome to husky hive")
})


app.listen(4000)