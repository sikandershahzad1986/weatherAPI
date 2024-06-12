import express from "express";
import bodyParser from "body-parser";   
import exp from "constants";
 const app = express();
 const port = 3000;
 app.use(bodyParser.urlencoded({extended:true}));
 app.use(express.static("public"));

app.get("/",(req,res)=>{
res.render("index.ejs");

});


app.get("/check", async (req, res) => {
    try {
      const result = await axios.get(API_URL + "/random");
      res.render("index.ejs", { content: JSON.stringify(result.data) });
    } catch (error) {
      res.status(404).send(error.message);
    }
  });


 app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
 }); 