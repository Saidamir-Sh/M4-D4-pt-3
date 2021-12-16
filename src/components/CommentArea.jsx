import { Component } from "react";
import { Form, Button } from 'react-bootstrap'

class CommentArea extends Component {

    fetchComments = async () => {
    
        let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
            headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWZkMjRjZmY1ZjAwMTU5MGJkYjEiLCJpYXQiOjE2Mzk2NjE0ODgsImV4cCI6MTY0MDg3MTA4OH0.h9aapd7z9bY9_a1NtekDOxgZvoy_lFnknsAap2K5tkE"
            }
         })

         let data = await response.json()
         console.log(data)
    }

    postComment = async (e, method) => {
        e.preventDefault()
        console.log('comment button')
    }

    componentDidMount = async () => {
         this.fetchComments()
        
    }


  render() {
    return (
      <div className="CommentArea my-2">
        <Form>
          <Form.Group controlId="comment">
            <Form.Control type="text" placeholder="Add your comment..." />
          </Form.Group>

          <Form.Group controlId="rate">
            <Form.Control  type="number" placeholder="Rate" min="1" max="5" />
          </Form.Group>

          <Button onClick={(e) => this.postComment(e)} variant="primary" type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default CommentArea;
