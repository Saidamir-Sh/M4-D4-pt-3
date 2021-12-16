import { Component } from "react";
import { Form, Button } from 'react-bootstrap'

class CommentArea extends Component {

    state = {
        comment: {
            comment: '',
            rating: '',
            elementID: ''
        }
    }

    fetchComments = async () => {
    
        let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.bookAsin}`, {
            headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWZkMjRjZmY1ZjAwMTU5MGJkYjEiLCJpYXQiOjE2Mzk2NjE0ODgsImV4cCI6MTY0MDg3MTA4OH0.h9aapd7z9bY9_a1NtekDOxgZvoy_lFnknsAap2K5tkE"
            }
         })

         let data = await response.json()
         console.log(data)
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments`)
            console.log(e.target)
        } catch (error) {
            alert(error)
        }
    }

    handleInput = (property, value) => {
        this.setState({
            comment : {
                ...this.state.comment,
                [property]: value
            }
        })
    }

    componentDidMount = async () => {
         this.fetchComments()
        
    }


  render() {
    return (
      <div className="CommentArea my-2">
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Form.Group controlId="comment">
            <Form.Control 
                type="text" 
                placeholder="Add your comment..." 
                required
                value={this.state.comment.comment}
                onChange={(e) => {
                    this.handleInput('comment', e.target.value)
                }}    
            />
          </Form.Group>

          <Form.Group controlId="rate">
            <Form.Control  type="number" placeholder="Rate" min="1" max="5" />
          </Form.Group>

          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default CommentArea;
