import React, { useEffect, useState } from 'react';
import './App.css';
import { Comments } from "./components/Comments";
import { CommentForm } from "./components/CommentForm";
import { Container } from 'semantic-ui-react';


function App() {
  const [comments, setComments] = useState([])
  useEffect(() => {
    fetch("/comments").then(response => {
      response.json().then(data => {
        setComments(data.comments)
        console.log(data)
      })
    })
  }, [])
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
