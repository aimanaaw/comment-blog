import React, { useState, useEffect } from 'react';
import { Form, Input, Button} from "semantic-ui-react";
import io from 'socket.io-client';
import * as EmailValidator from 'email-validator';

const socket = io.connect('http://localhost:5000')

export const CommentForm = ({onNewComment}) => {
  const [author, setAuthor] = useState('');
  const [note, setNote] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [buttonState, setButtonState] = useState(true);
  const [buttonMessage, setButtonMessage] = useState('Please complete all fields');

  useEffect(() => {
    if (author !== "" && note !== "" && EmailValidator.validate(email)) {
      setButtonState(false);
      setButtonMessage('Submit');
    } else {
      setButtonState(true);
      setButtonMessage('Please complete all fields');
    }
  }, [author, email, note])

  const submitComment = async () => {
      const comment = {author, note, email, date};
      console.log(author)
      const response = await fetch("/add_comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)
      });
      if (response.ok) {
        socket.emit("message", comment);
        onNewComment(comment);
        setNote('');
        setAuthor('');
        setEmail('');
        setDate('');
        setButtonState(true);
        setButtonMessage('Please complete all fields');
      }
    }
  

  return (
    <Form>
      <Form.Field>
        <Input placeholder="Your Name" value={author} onChange={event => setAuthor(event.target.value)}/>
      </Form.Field>
      <Form.Field>
        <Input placeholder="Your Email" value={email} onChange={event => setEmail(event.target.value)}/>
      </Form.Field>
      <Form.Field>
        <Input placeholder="New Comment" value={note} onChange={event => setNote(event.target.value)}/>
      </Form.Field>
      <Form.Field>
        <Button disabled={buttonState} onClick={submitComment}>
          {buttonMessage}
        </Button>
      </Form.Field>
    </Form>
  );
};