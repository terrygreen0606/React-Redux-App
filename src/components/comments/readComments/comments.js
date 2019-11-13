import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './comments.css'

import { fetchComments } from '../../../actions/comments/commentsAction'

export class Comments extends Component {

    componentDidMount() {
        this.props.fetchComments()
        console.log(this.props.postId)
    }

    CommentsAfterPost(postId, title, email, body) {
        if (this.props.postId === postId) {
            return (
                <Fragment>
                    <h4>Title : {title}</h4>
                    <h5>Email : {email}</h5>
                    <span>Content : {body}</span>
                </Fragment>
            )
        }
    }

    render() {

        const comments = this.props.comments.map( comment => (
            <Fragment key={comment.id}>
                {this.CommentsAfterPost(comment.postId, comment.name, comment.email, comment.body)}
            </Fragment>
        ))

        return (
            <div className="position">
                <h3>Comments</h3>
                {comments}
            </div>
        )
    }
}

Comments.propTypes = {
    fetchComments: PropTypes.func.isRequired,
    comments: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    comments: state.comments.comments
})

export default connect(mapStateToProps, {fetchComments})(Comments)
