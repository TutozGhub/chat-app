import React, { useContext, useEffect, useRef, useState } from 'react'
import { db } from '../firebase';
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';
import Message from './Message';
import SendMessage from './SendMessage';
import { DataContext } from './DataProvider';
import BarraMobile from './BarraMobile';

export default function Chat() {
    
    const {isMobile, isOnLogin } = useContext(DataContext);
    const [messages, setMessages] = useState([]);
    const [hide, setHide] = useState("");
    const chatRef = useRef(null);

    useEffect(()=>{
        if (isOnLogin == false) {
            setHide("");
        }
        if (isMobile == true & isOnLogin == true){
            setHide("hide");
        }
    }, [isOnLogin])

    useEffect(()=>{
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages])

    useEffect(() =>{
        const newQuery = query(collection(db, 'messages'), orderBy('datetime'));
        const unsubscribe = onSnapshot(newQuery, (QuerySnapshot) => {
            let currentMessages = [];
            QuerySnapshot.forEach(item =>{
                currentMessages.push({ conttent: item.data(), id: item.id })
            })
            setMessages(currentMessages);
        })
        return unsubscribe;
    }, [])



  return (
    <div
    className={`chat ${hide}`}
    id='chat'
    >
        {isMobile ? <BarraMobile /> : ""}
        
        <section
        ref={chatRef}
        className='chat-content'
        >
            {messages && messages.map(
                item => (
                    <Message 
                    key={item.id}
                    message={item.conttent}
                    />
                )
            )}
        </section>
        <SendMessage />
    </div>
  )
}
