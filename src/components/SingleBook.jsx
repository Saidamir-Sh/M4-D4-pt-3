import React from 'react'
import { Card } from 'react-bootstrap'
import CommentArea from './CommentArea'

class SingleBook extends React.Component {

    state = {
        selected: false,
        commentArea : false
    }

    render() {
        return (
            <>
            <Card
                onClick={() => {
                    this.setState({ commentArea : !this.state.commentArea})
                    this.setState({ selected: !this.state.selected })
                }}
                style={{ border: this.state.selected ? '3px solid red' : 'none' }}
            >
                <Card.Img variant="top" src={this.props.book.img} />
                <Card.Body>
                    <Card.Title style={{ color: 'black' }}>{this.props.book.title}</Card.Title>
                </Card.Body>
            </Card>
             {
                this.state.commentArea && <CommentArea />
            }
            </>
        )
    }

}

export default SingleBook