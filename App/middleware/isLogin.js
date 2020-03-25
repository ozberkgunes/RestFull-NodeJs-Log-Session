var table = require('../model/db');

let _isLogin= false;

const isLogin = (req,res,next)=>{
    if(table.Data.UserName != null && table.Data.Pass != null && table.Data.Active == "True"){
        _isLogin = true;
        console.log("Giris Basarili");
        next();
    }
    else{
        _isLogin = false;
        console.log(table.Data.UserId,table.Data.UserName,table.Data.Pass)
        res.send("Middleware Calisti Giris Yapmalisiniz");
    }
}
module.exports = isLogin;