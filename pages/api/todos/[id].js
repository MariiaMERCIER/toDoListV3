import connectDB from "../../../middlewares/connectDB";
import Todo from "../../../models/Todo";

const handler = async(req,res)=>{
    if(req.methode === "PUT"){
        try{
            const todoUpdate = await Todo.findById(req.query.id)

          

        }
    }
}

export default connectDB(handler)