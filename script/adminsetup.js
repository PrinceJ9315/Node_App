const db = require('../model/index');
let Admin = db.Admin;

adminCreate= async()=>{
    let data={
        title:"admin",
        content:"123456"
    }
    try {
        let testAdmin = new Admin(data);
        let responnse =  await testAdmin.save();
        console.log("res ",responnse);
        process.exit(0);
    } 
    catch (error) {
        console.log(error);
        process.exit(0);
    }    
}

(async()=>{
   await adminCreate();
})();
