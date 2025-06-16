import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://saipradhamkanth:8919641422@cluster0.e3u6onb.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.