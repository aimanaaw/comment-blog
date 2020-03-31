import React from "react";
import { Table } from "semantic-ui-react";
import Moment from "react-moment";
import moment from "moment";

export const Comments = ({ comments }) => {
  return (
    <div>

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
              <Table.Row key={eachComment.id}>
                <Table.Cell width={2} Icon name="mail">
                  <a href={eachAuthorEmail}>{eachComment.author}</a>
                </Table.Cell>
                <Table.Cell width={2}>
                {moment(eachComment.date).format('DD MMM YYYY')}
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
