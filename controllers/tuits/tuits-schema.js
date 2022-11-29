import mongoose from "mongoose";

const schema = mongoose.Schema({
    topic: {type: String, default: 'Space'},
    username: {type: String, default: 'NASA'},
    handle: {type: String, default: '@nasa'},
    isVerified: {type: Boolean, default: false},
    image: {type: String, default: 'nasa_logo.jpg'},
    time: {type: String, default: 'just now'},
    title: String,
    tuit: String,
    liked: {type: Boolean, default: false},
    likes: {type: Number, default: 0},
    dislikes: {type: Number, default: 0},
    disliked: {type: Boolean, default: false},
    replies: {type: Number, default: 0},
    retuits: {type: Number, default: 0}
}, {collection: 'tuits'});

export default schema;
