const mongoose = require('mongoose');

const PostVersion = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Post',
    },
    versionNumber: {
      type: Number,
      required: true,
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);
