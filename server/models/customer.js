import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  name: { type: 'String', required: true },
  address: { type: 'String', required: true },
  phone: { type: 'String', required: true },
  rongliang: { type: 'String', required: true },
  progress: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Customer', customerSchema);
