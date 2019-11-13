import { FETCH_POSTS, NEW_POST } from '../../actions/types'

const initialState = {
    postItems: [],
    postItem: {}
}

export default function ( state = initialState, action) {
    switch(action.type) {

        // POSTS
        case FETCH_POSTS:
            return {
                ...state,
                postItems: action.payload
            }

        case NEW_POST:
            return {
                ...state,
                postItem: action.payload
            }

        default:
            return state
    }
}