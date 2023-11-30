import mongoose from "mongoose";

const interactionSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  followed: {
    type: Boolean,
    default: false,
  },
  messages: [{
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  }],
  distance: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

export default mongoose.model("Interaction", interactionSchema);
