import React, { useEffect, useState } from 'react';
import './App.css';
import { Comments } from "./components/Comments";
import { CommentForm } from "./components/CommentForm";
import { Container } from 'semantic-ui-react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000')


function App() {
  const [comments, setComments] = useState([])
  useEffect(() => {
    fetch("/comments").then(response => {
      response.json().then(data => {
        setComments(data.comments)
        console.log(data)
      })
    })
    getComments();

  }, [comments.length])

  const getComments = () => {
    socket.on("message", newComment => {
      console.log("comments")
      setComments([...comments, newComment]);
    });
    console.log("Hello from the client side")
  }

  


  return (
    <div className="App">
      <Container style={{marginTop:40}}>
        <Comments comments={comments}/>
      </Container>
      <Container>
        <CommentForm onNewComment={comment => setComments(previousComments => [...previousComments, comment])} />
      </Container>
    </div>
  );
}

export default App;
