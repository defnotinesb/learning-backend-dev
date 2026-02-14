import dotenv from "dotenv";
import connectDB from "./config/database.js";


dotenv.config({
    path: './.env'
}
);

const startserver = async() =>{
    try {
        await connectDB();

        app.on("error", (error) => {
            console.log("ERROR", error);
            throw error
        });

        app.listen(process.env.PORT || 8000, () =>{
            console.log(`server is listening on port: 
                ${process.env.PORT}`)
        });
    } catch (error) {
        console.log("MongoDB connection failed!!", error);
    }
}

startserver();