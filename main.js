let express  = require("express")
let cors = require("cors")
let app = express()

app.use(cors({
    origin: "*"
}));

        //endpoint
app.get("/alias",(req, res)=>{
  res.json({
    alias:"qux"
  })
})


app.listen(3000, ()=>{
    console.log("server ready :)")
})