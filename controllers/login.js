let userModel = require('../models/user');
class loginController{
    constructor(){
        console.log("loginController constructor");
    }
    login(req,res){
        let data= userModel.getModel().findAll()
        .spread(function(){ 
            let data =[];
            for( let item of arguments){
                data.push(item.dataValues);
            }
            return data;
        });            
        data.then((mydata)=>{
            console.log(mydata);
            res.send(mydata);
        });
    }
    insert(req,res){
        userModel.getModel().create({changeName:'dfads',password:'123456',age:50}).then(function(success){
            console.log('success');
            console.dir(arguments);
            res.send(success);
        },function(err){
            console.log('error');
            console.log(err);
            //res.send(err);
            res.send(err);
            
        });
    }
}
module.exports =new loginController();