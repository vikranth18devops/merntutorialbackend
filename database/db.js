import { connect } from "mongoose";

const connectToMongo = async () => {
  try {
    await connect('mongodb+srv://aarvik25022022:Omsairam18@merndatabse.31ipydf.mongodb.net/eNoteBook');
    console.log("---***Database Connected Successfully***---")
  } catch (error) {
    console.log(error);
  }
}

export default connectToMongo;


//mongodb+srv://aarvik25022022:Omsairam18@merndatabse.31ipydf.mongodb.net/?retryWrites=true&w=majority


