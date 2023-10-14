import { IoMdSend } from "@react-icons/all-files/io/IoMdSend";
import toast from "react-hot-toast";
import { useState } from "react";

const NewMessageInp = ({
  model,
  updateChatId,
  messages,
  setMessages,
  isNewChat,
  createChat,
  isLoading,
}) => {

  // states
  const [message, setMessage] = useState("");
  const [textareaHeight, setTextareaHeight] = useState('48px');

  const handleTextareaChange = (e) => {
    setMessage(e.target.value);
    adjustTextareaHeight(e.target);
  };

  const adjustTextareaHeight = (textarea) => {
    const maxLines = 7;
    const lineHeight = parseFloat(getComputedStyle(textarea).lineHeight);

    // Calculate the height based on content
    textarea.style.height = 'auto';
    const scrollHeight = textarea.scrollHeight;

    if (scrollHeight <= maxLines * lineHeight) {
      textarea.style.height = scrollHeight + 'px';
    } else {
      textarea.style.overflowY = 'scroll';
      textarea.style.height = (maxLines * lineHeight) + 'px';
    }
  };

  const handleEnterPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleCreateChat();
      setMessage('');
      setTextareaHeight('48px'); // Reset the height after sending
    } else if (e.key === 'Enter' && e.shiftKey) {
      e.preventDefault();
      setMessage((prevMessage) => prevMessage + '\n');
      adjustTextareaHeight(e.target);
    }
  };

  // handler
  const handleCreateChat = () => {
    if (!message) {
      return toast.error("Message value required!");
    }

    let sendData = {
      role: "user",
      message,
      model,
    };

    setMessages([
      ...messages,
      {
        ...sendData,
        content: sendData.message,
      },
    ]);

    if (!isNewChat) {
      sendData = {
        ...sendData,
        chatId: updateChatId,
      };
    }

    createChat(sendData);
    setMessage("");
  };

  return (
    <div className="w-3/5 mx-auto flex justify-between border border-black rounded-md px-5 py-1 sticky bottom-0">
      <textarea
        type="text"
        name="message"
        id="message"
        value={message}
        placeholder="Nachricht senden"
        className="p-3 w-full active:outline-none focus:outline-none resize-none"
        style={{ height: textareaHeight }}
        onChange={handleTextareaChange}
        onKeyDown={handleEnterPress}
      />

      <button
        type="button"
        disabled={!message || isLoading}
        className="disabled:text-gray-300 disabled:cursor-not-allowed"
        onClick={handleCreateChat}
      >
        {isLoading ? (
          <div className="text-black">...</div>
        ) : (
          <IoMdSend className="text-2xl" />
        )}
      </button>
    </div>
  );
};

export default NewMessageInp;