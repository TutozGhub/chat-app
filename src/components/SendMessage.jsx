import React, { useContext } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';
import { auth, db } from '../firebase';
import { DataContext } from './DataProvider';
import EmojiPicker from 'emoji-picker-react';
import Picker from 'emoji-picker-react';

export default function SendMessage() {

  const [input, setInput] = useState("");
  const [emojis, setEmojis] = useState("");
  const { user, isMobile } = useContext(DataContext);

  const send = async (e) =>{
    e.preventDefault()
    setInput("");
    if (user == null){
      alert("Por favor inicie sesion con su cuenta de google para utilizar el chat.");
    }
    else if (input.trim() != ""){
      const {uid, displayName, photoURL} = auth.currentUser;
      await addDoc(collection(db, 'messages'), {
        text: input.trim(),
        name: displayName,
        uid,
        photo: photoURL,
        datetime: serverTimestamp()
      });
    }
  }

  return (
    <form
    className='barra-chat'
    onSubmit={send}
    >
      {!isMobile ? 
        (
        <>
            <div className='emojis'
            onClick={(e) => {e.stopPropagation();}}
            >
              <Picker
              open={emojis}
              lazyLoadEmojis={true}
              onEmojiClick={(e)=>{
              setInput(`${input}${e.emoji} `);
              setEmojis(false);
              }}
              />
            </div>
            <button
            className='btn'
            type='button'
            onClick={()=>{
              setEmojis(!emojis);
            }}
          >
            <i className="fa-solid fa-face-grin-tongue fa-2xl"></i>
          </button>
        </>
        )
        : ""}

        <input
        className='text'
        type="text"
        placeholder='Mensaje'
        onChange={(e) => {setInput(e.target.value)}}
        onKeyUp={(e) => {(e.code == "Enter") ? SubmitEvent : null}}
        value={input}
        />

        <button
        type='submit'
        className='btn'
        >
            <i className="fa-solid fa-paper-plane"></i>
        </button>
    </form>
  )
}
