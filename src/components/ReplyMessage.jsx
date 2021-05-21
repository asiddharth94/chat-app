const ReplyMessage = ({ lastMessage, message }) => {
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username === message.sender.username;
  return <div>ReplyMessage</div>;
};

export default ReplyMessage;
