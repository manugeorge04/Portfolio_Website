import ReactMarkdown from "react-markdown";

function ChatBubble({ author, message }) {
  return (
    <div
      className={`flex ${
        author === "user"
          ? "justify-end mr-4"
          : "justify-start ml-4 max-w-[75%]"
      }`}
    >
      <div
        className={`text-white py-2 px-3  rounded-tr-[16px] rounded-bl-[16px] mb-8 relative max-w-[75%]
          ${
            author === "user"
              ? "bg-gradient-to-r from-primary-400 to-secondary-600 rounded-tl-[16px]"
              : "bg-gradient-to-r from-gray-600 to-gray-500 rounded-br-[16px]"
          }`}
      >
        <ReactMarkdown>{message}</ReactMarkdown>
      </div>
    </div>
  );
}

export default ChatBubble;
