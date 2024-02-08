const mongoose = require('mongoose');

const chatName = mongoose.Schema(
    {
        chatName: {
            type: String,
            trim: true
        },
        isGroupChat: {
            type: Boolean,
            default: false
        },
        users: [
            {
                type: mongoose.Schema.Types.ObjectId, //id of the perticuler user 
                ref: "User" // refference to the user schema
            }
        ],
        letestMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Message'
        },
        groupAdmin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
)

const Chat = mongoose.model("Chat", chatName)

// module.exports = Chat;
export default Chat;