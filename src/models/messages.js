class Message {
  constructor(senderId, receiverId, content, timestamp) {
    this.senderId = senderId;
    this.receiverId = receiverId;
    this.content = content;
    this.timestamp = timestamp;
  }
}

export default Message;
