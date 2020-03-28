import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Comments } from "./components/Comments";

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
  console.log(comments)
  return (
    <div className="App">
      <Comments comments={comments}/>
    </div>
  );
}

export default App;
