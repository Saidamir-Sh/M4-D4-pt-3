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
            <Card key={this.props.book.asin}
                onClick={() => {
                    this.setState({ commentArea : !this.state.commentArea})
                    this.setState({ selected: !this.state.selected })
                    console.log(this.props.book.asin)
                }}
                style={{ border: this.state.selected ? '3px solid red' : 'none' }}
            >
                <Card.Img variant="top" src={this.props.book.img} />
                <Card.Body>
                    <Card.Title style={{ color: 'black' }}>{this.props.book.title}</Card.Title>
                </Card.Body>
            </Card>
             {
                this.state.commentArea && <CommentArea bookAsin={this.props.book.asin} />
            }
            </>
        )
    }

}

export default SingleBook