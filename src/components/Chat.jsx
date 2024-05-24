import React, { useEffect, useRef, useState } from 'react'
import { auth, db } from '../firebase';
import { query, collection, orderBy, onSnapshot, QuerySnapshot } from 'firebase/firestore';
import Message from './Message';
import SendMessage from './SendMessage';

export default function Chat() {

    const [messages, setMessages] = useState([]);

    const chatRef = useRef(null);

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
    className='chat'
    id='chat'
    >
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
