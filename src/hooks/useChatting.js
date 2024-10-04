import { useState, useEffect } from "react";
import supabase from "../supabaseClient";

function useChatting() {
  const [newMessage, setNewMessage] = useState(""); 
  const [items, setItems] = useState([]);  

  const sendMessage = () => {
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
            getDatas();
        })
        .catch((err) => {
            alert(err.message);
        });
  };

  const getDatas = async () => {
    const { data: messages, error: messagesError } = await supabase
      .from('chats')
      .select()
      .order('created_at', { ascending: true });

    if (messagesError) {
      alert(messagesError.message);
      return;
    }

    const { data: files, error: filesError } = await supabase
      .from('files')
      .select()
      .order('created_at', { ascending: true });

    if (filesError) {
      alert(filesError.message);
      return;
    }

    const data = [
      ...messages.map(msg => ({ ...msg, type: 'message' })),
      ...files.map(file => ({ ...file, type: 'file' }))
    ];
    data.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    setItems(data);
  }
  
  useEffect(() => { 
    getDatas();
  }, []);

  return {
    items,
    newMessage,
    setNewMessage,
    sendMessage 
  };
}

export default useChatting;
