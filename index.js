import express from "express";
import bodyParser from "body-parser";
const app = express();
const port  = 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/",(req,res)=>{
    res.render("login.ejs");
});

const security= {
    user :["lakshman"],
    pass : ["Santhi@123"],
    inval :"invalid"
}
const matter={
    title :["post1","post2"],
    descr : ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus animi, veniam nemo sint architecto libero, omnis porro ab non rem, necessitatibus ipsam eveniet facere tempore quis repellendus id voluptate ipsa.",
             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus animi, veniam nemo sint architecto libero, omnis porro ab non rem, necessitatibus ipsam eveniet facere tempore quis repellendus id voluptate ipsa."]
}
app.post("/login1",(req,res)=>{var a = false;
    try{for (var i= 0 ;i <security.user.length;i++) {
        if(req.body["username"]==security.user[i] && req.body["password"]==security.pass[i]){
            console.log("authentication successfull");
            a = true;
            res.render("home.ejs",matter);
        }else{
            continue;
        }
    }
    if(a ==false){
        res.render("login.ejs",security);
    }

    }
    catch(err){
        console.log(err);
    }
    console.log(req.body);
    
   
});
app.get("/login1",(req,res)=>{
    res.render("login.ejs");
});

app.get("/home",(req,res)=>{
    res.render("home.ejs",matter);
});

app.get("/post123",(req,res)=>{
    res.render("post.ejs");
});
app.post("/post123",(req,res)=>{
    matter.title.push(req.body["title"]);
    matter.descr.push(req.body["description"]);
    res.render("post.ejs");
});

app.get("/signup",(req,res)=>{
    res.render("signup.ejs");
});
app.post("/signup",(req,res)=>{
    security.user.push(req.body["username"]);
    security.pass.push(req.body["password"]);
    console.log(req.body);
    console.log("Registration Succesfull...");
    res.render("login.ejs");
});
app.listen(port ,(req,res)=>{
    console.log(`server running at http://localhost:${port}`);
});