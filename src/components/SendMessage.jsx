import React, { useContext } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';
import { auth, db } from '../firebase';
import { DataContext } from './DataProvider';

export default function SendMessage() {

  const [input, setInput] = useState("");
  const { user } = useContext(DataContext);

  const send = async (e) =>{
    e.preventDefault()
    setInput("");
    if (user == null){
      alert("Por favor inicie sesion con su cuenta de google para utilizar el chat.");
    }
    else if (input.trim() != ""){
      const {uid, displayName, photoURL} = auth.currentUser;
      await addDoc(collection(db, 'messages'), {
        text: input,
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
        <input
        type="text"
        placeholder='Mensaje'
        onChange={(e) => {setInput(e.target.value)}}
        onKeyUp={(e) => {(e.code == "Enter") ? SubmitEvent : null}}
        value={input}
        />
        <button
        type='submit'
        >
            <i className="fa-solid fa-paper-plane"></i>
        </button>
    </form>
  )
}
