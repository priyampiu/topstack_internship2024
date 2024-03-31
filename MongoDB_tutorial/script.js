const mongoose = require("mongoose")
const user = require("./user")

mongoose
.connect("mongodb://localhost/sigma")
.then((success) => console.log("connected"))
.catch((err) => console.log(err.message));

run()
async function run() {
    try{     
        // const user1 = await user.create({
        //     name: "priya", 
        //     age:54,
        //     email: "testCode@mail.com",
        //     dob: 21-09-2009,
        //     hobby: ["drawing","crafting"],
        //     address:{
        //         street: "singur",
        //         city: "hooghly"
        //     }
        // })
        // user1.name="riya"
        // await user1.save()
        // // const user1 = new user({name: "priya", age:23})
        // // await user1.save()
        // console.log(user1)

        // const user1 = await user.findById('6606bca9d2f3c194cfaf8dcc');
        
        // const user1 = await user.find({name: "riya"});
        
        // const user1 = await user.findOne({name: "riya"});
        
        // const user1 = await user.exists({name: "riya"});  
        
        // const user1 = await user.where("name").equals("riya");
        
        // const user1 = await user
        //     .where("age")
        //     .gt(12)
        //     .lt(24)
        //     .where("name")
        //     .equals("riya")
        //     .populate("bf")
        //     .limit(1)
        //     // .select("age")
        //     // user1[0].bf='6606b13e2f6707ada224fff6'
        //     // await user1[0].save()

        
        const user1 = await user.find({name:"priya"});
        await user1.save();
        console.log(user1);
        user1.sayHi();
    }
    catch(e){
        console.log(e.message)
    }
}
