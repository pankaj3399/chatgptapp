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

  // // clear input field
  // useEffect(() => {
  //     if (isSuccess) {
  //         setMessage('')
  //     }
  // }, [isSuccess, apiData])

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
        multiple
        value={message}
        placeholder="Nachricht senden"
        className="p-3 w-full active:outline-none focus:outline-none"
        style={{height: '48px'}}
        // style={{ maxHeight: "180px", overflow: 'scroll' }}
        // rows={6}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleCreateChat();
            setMessage("");
          }
        }}
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
