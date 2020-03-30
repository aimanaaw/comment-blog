import React, { useState } from 'react';
import { Form, Input, Button} from "semantic-ui-react";
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000')

export const CommentForm = ({onNewComment}) => {
  const [author, setAuthor] = useState('')
  const [note, setNote] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')

  const submitComment = async () => {
      const comment = {author, note, email, date};
      const response = await fetch("/add_comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)
      });
      if (response.ok) {
        socket.emit("message", comment);
        console.log('response worked');
        onNewComment(comment);
        setNote('');
        setAuthor('');
        setEmail('');
        setDate('');
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
        <Input placeholder="dd/mm/yyyy" value={date} onChange={event => setDate(event.target.value)}/>
      </Form.Field>
      <Form.Field>
        <Button onClick={submitComment}>
          Submit
        </Button>
      </Form.Field>
    </Form>
  );
};