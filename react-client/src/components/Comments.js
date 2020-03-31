import React from "react";
import { List, Header, Table, Icon } from "semantic-ui-react";
import Moment from "react-moment";

export const Comments = ({ comments }) => {
  return (
    <div>
      {/* <List>
      <List.Item>
      {comments.map(comment => {
        return (
          <List.Content key={comment.author}>
            <Header>
              {comment.author}
            </Header>
            {comment.note}
          </List.Content>
        )
      })}

      </List.Item>
    </List> */}

      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Posted by</Table.HeaderCell>
            <Table.HeaderCell>Posted on</Table.HeaderCell>
            <Table.HeaderCell>Post</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {comments.map(eachComment => {
            let eachAuthorEmail = "mailto:" + eachComment.email;
            return (
              <Table.Row>
                <Table.Cell width={1} Icon name="mail">
                  <a href={eachAuthorEmail}>{eachComment.author}</a>
                </Table.Cell>
                <Table.Cell>
                  <Moment titleFormat="D MMM YYYY" withTitle>
                    {eachComment.date}
                  </Moment>
                </Table.Cell>
                <Table.Cell>{eachComment.note} - posted <Moment fromNow>{eachComment.date}</Moment></Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};
