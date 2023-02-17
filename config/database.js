import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log(`mongoose connected`); 
  })
  .catch((error) => console.log(`mongoose not connnected.. ${error}`))

  export default mongoose