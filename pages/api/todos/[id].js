import connectDB from "../../../middlewares/connectDB";
import Todo from "../../../models/Todo";

const handler = async (req, res) => {
  if (req.method === "PUT") {
    if (req.body.name) {
      try {
        const todoUpdate = await Todo.findById(req.query.id);

        todoUpdate.name = req.body.name;
        await todoUpdate.save();
        res.status(200).json(todoUpdate);
      } catch (error) {
        res.status(400).json(error.message);
      }
    } else {
      try {
        const todoUpdate = await Todo.updateOne({ _id: req.query.id }, [
          { $set: { isDone: { $eq: [false, "isDone"] } } },
        ]);

        await todoUpdate.save();
      } catch (error) {
        res.status(400).json(error.message);
      }
    }
  }

  if (req.method === "DELETE") {
    try {
      const todoDelete = await Todo.deleteOne({ _id: req.query.id });
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
};

export default connectDB(handler);
