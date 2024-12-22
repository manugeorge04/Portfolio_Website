"use client"

import axios from "axios";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import ChatBubble from "../components/ChatBubble";
import Navbar from "../components/Navbar";
import TypingIndicator from "../components/TypingIndicator";
import "../styles/tailwind.css";
import { BACKEND } from "../utils/appConstants";

export default function Chat() {
  const [messages, setMessages] = useState( [
    {
      author: "ai",
      content: "Hi there! 👋 My name is AiMe, I'm all about helping you understand Manu's professional qualifications and achievements! If you have any questions, feel free to ask! 😊",
    }
  ]);

  const [query, setQuery] = useState("");

  const [loading, setLoading] = useState(false);

  const playAudio = (type) => {
    const audio = new Audio(
      `/audio/message-${type}.mp3`
    );
    audio.play();
  };

  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop =
        messagesEndRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (query.trim()) {
      playAudio("sent");
      setMessages((prevMessages) => [
        ...prevMessages,
        { author: "user", content: query },
      ]);
      setQuery(""); // Clear the input field after sending
      // post request
      setLoading(true);
      let answer = "";
      try {
        const response = await axios.post(
          `http://${BACKEND}/chat/send/`,
          { question: query },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
            timeout: 10000,
          }
        );
        if (response.statusText != 'OK') {
          answer =
            "Hmm... something unexpected happened. Maybe I need a little coffee break? ☕";
        } else {
          const data = response.data;
          answer = data.response;
        }
      } catch (error) {
        console.error(
          "Error sending message:",
          error
        );
        answer = "Eek! Something's amiss. Let me call for backup. 🚨";
      } finally {
        setLoading(false);
        playAudio("received");
        setMessages((prevMessages) => [
          ...prevMessages,
          { author: "ai", content: answer },
        ]);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto  rounded-[6px] flex flex-col h-[calc(100dvh-120px)] mb-4">
        <div className="flex flex-row items-center px-4 py-1 max-h-[100px] rounded-[8px] sm:border-[#33353F] sm:border rounded-md py-8 px-16 ">
          <div className="bg-green-300 rounded-full">
            <Image
              src="/images/memoji.png"
              alt="memoji image"
              width={70}
              height={70}
            />
          </div>
          <span className="font-bold text-2xl ml-6">
            AiMe
          </span>
        </div>
        <div
          className="flex-grow overflow-y-auto m-2"
          ref={messagesEndRef}
        >
          {messages.map((msg, index) => (
            <ChatBubble
              author={msg.author}
              message={msg.content}
              key={index}
            />
          ))}
          {loading && <TypingIndicator />}
          <div ref={messagesEndRef}></div>
        </div>

        <div className="flex items-center p-4  sm:border-[#33353F] sm:border rounded-md">
          <input
            type="text"
            className="flex-1 p-2 text-white bg-[#1F2937] rounded-md outline-none"
            placeholder="Type a message..."
            value={query}
            onChange={(e) =>
              setQuery(e.target.value)
            }
            onKeyDown={handleKeyPress}
          />
          <button
            onClick={sendMessage}
            className="ml-10 mr-10 text-primary-500 hover:text-primary-600"
          >
            <FiSend size={20} />
          </button>
        </div>
      </div>
    </main>
  );
}
