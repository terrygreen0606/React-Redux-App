import { FETCH_POSTS, FETCH_COMMENTS, NEW_POST } from '../types'

// POSTS
export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then( res => res.json())
        .then( posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }))
}

export const newPost = (postData) => dispatch => {

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then( res => res.json())
    .then( post => dispatch({
        type: NEW_POST,
        payload: post
    }))
}

//COMMENTS
export const fetchComments = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then( res => res.json())
        .then( comments => dispatch({
            type: FETCH_COMMENTS,
            payload: comments
        }))
}