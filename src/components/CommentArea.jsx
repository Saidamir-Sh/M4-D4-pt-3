import { Component } from "react";
import { Form, Button } from 'react-bootstrap'

class CommentArea extends Component {
  render() {
    return (
      <div className="CommentArea">
        <Form>
          <Form.Group controlId="comment">
            <Form.Control id="comment" type="text" placeholder="Add your comment..." />
          </Form.Group>

          <Form.Group controlId="rate">
            <Form.Control id="rate" type="number" placeholder="Rate" min="1" max="5" />
          </Form.Group>

          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default CommentArea;
