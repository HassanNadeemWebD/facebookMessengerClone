import React, { useState, useEffect } from 'react';
import Message from './components/Message';
import { Button, FormControl, InputLabel, Input } from '@mui/material';
import './App.css';


function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState('');
  const [userName, setUserName] = useState('');
  useEffect(() => {


    console.log('useEffect')

    setUserName(prompt('Please Enter Your Name '))


  }, []);

  const sendMessages = (event) => {
    event.preventDefault();
    console.log('message send');
    setMessages(
      [...messages, {username: userName , text: input}]
    )
    setInput('');
    console.log(messages);

  }

  return (
    <div className="App">
      <h1> Facebook-Messenger-Clone </h1>
      <h2>Welcome {userName}</h2>

      <form>
        <FormControl>

          <InputLabel >Enter a message</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />

          <Button type='submit' disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessages}> Send Messeges </Button>

        </FormControl>
      </form>


      {/* {

        messages.map(messages => (
          <Message username={userName} message={messages} />

        ))
      } */}
    </div>
  );
}

export default App;

