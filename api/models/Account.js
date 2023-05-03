import mongoose from 'mongoose';

const instance = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: {
      first: { type: String, required: true },
      middle: { type: String },
      last: { type: String, required: true },
    },
    profilePicture: String,
    mailbox: {
      inbox: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Email' }],
      outbox: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Email' }],
      inboxReply: [{
         inboxId: {type: mongoose.Schema.Types.ObjectId, ref: 'Email'}, 
         replyId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Email'}]
      }],
      outboxReply: [{
         outboxId: {type: mongoose.Schema.Types.ObjectId, ref: 'Email'}, 
         replyId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Email'}]
      }],
      drafts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Email' }],
      trash: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Email' }],
      favorite: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Email' }],
      read: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Email' }],
    },
  },
  {
    timestamps: true,
  },
);

// modelName = model name   --->   https://mongoosejs.com/docs/guide.html
// note: use a singular name, mongoose automatically creates a collection like so -> model: 'Person' === collection: 'people'
const modelName = 'Account';

export default mongoose.model(modelName, instance);
