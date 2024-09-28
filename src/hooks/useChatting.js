import { useState, useEffect } from "react";
import supabase from "../supabaseClient";

function useChatting() {
  const [messages, setMessages] = useState([]);  
  const [newMessage, setNewMessage] = useState(""); 

  const sendMessage = async () => {
    if (newMessage.trim() === "") return; 

    const newMessageObj = {
      content: newMessage,
      created_at: new Date().toISOString(),
      is_sent: true,
    };

    supabase
        .from('chats')
        .insert([newMessageObj])
        .then(({ data, error }) => {
            if (error) {
                alert(error.message);
                return;
            }
            console.log(data);
            setNewMessage("");
            getMessages(); 
        })
        .catch((err) => {
            alert(err.message);
        });
  };

  function getMessages() {
    supabase
      .from('chats')
      .select()
      .range(0, 50)
      .order('created_at', { ascending: true })
      .then(({ data, error }) => {
        if (error) {
          alert(error.message);
          return;
        }
        setMessages(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }
  
  useEffect(() => { 
    getMessages();
  }, []);

  return {
    messages,
    newMessage,
    setNewMessage,
    sendMessage 
  };
}

export default useChatting;
