// create mongodb database connection
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`db connected : ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}
    
export default connectDB;
 