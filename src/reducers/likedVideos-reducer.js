export function likedReducer(state, action) {
    switch(action.type) {
        case "get-liked-video":
            return {
                ...state,
                liked: action.payload
            }
        case "add-to-liked":
            return {
                ...state,
                liked: [...state.liked, 
                    {...action.payload, inLiked: true}
                ]
            }
        case "remove-from-liked":
            return {
                ...state,
                liked: [...state.liked.filter((item) => item._id !== action.payload._id)]
            }
        default:
            return {...state}
    }
}