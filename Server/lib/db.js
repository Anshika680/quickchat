
import mongoose from 'mongoose';

const testSchema = new mongoose.Schema({ name: String });
const Test = mongoose.model('Test', testSchema);

async function connect() {
    await mongoose.connect(process.env.MONGODB_URI);
    await Test.create({ name: 'Hello' }); // This will create the DB and collection
    console.log('Connected and test document inserted');
}

export default connect;