import React from 'react';
import {List, Header} from "semantic-ui-react"

export const Comments = ({ comments }) => {
  return (
    <div>

    <List>
      {comments.map(comment => {
        return (
          <List.Item key={comment.author}>
            <Header>
              {comment.note}
            </Header>
          </List.Item>
        )
      })}
    </List>
    </div>
  )
}