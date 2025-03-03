import React, { useContext, useState } from 'react';
import { signOut } from 'firebase/auth';
import { collection, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import { collection, onSnapshot, addDoc} from "firebase/firestore";
import { AuthContext } from './AuthService';

const Room = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    onSnapshot(collection(db, 'messages'), (snapshot) => {
      const messages = snapshot.docs.map((doc) => {
        return doc.data()
      });
      setMessages(messages)
    })
  }, [])

  const user = useContext(AuthContext)
  console.log(user.displayName)

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(collection(db, 'messages'), {
      content: value,
      user: user.displayName
    });
  };

  return (
    <>
      <h1>Room</h1>
      <ul>
        {
          messages.map(message => <li>{message.user}: {message.content}</li>)
        }
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">送信</button>
      </form>
      <button onClick={() => signOut(auth)}>Logout</button>
    </>
  )
}

export default Room;