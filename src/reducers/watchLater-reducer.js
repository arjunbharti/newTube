export function watchLaterReducer(state, action) {
    switch(action.type){
        case "get-watchLater-products":
            return { 
                ...state,
                watchLater: action.payload
            }
        case "add-to-watchLater":
            return {
                ...state,
                watchLater: [...state.watchLater, 
                    {...action.payload, inWatchLater: true}
                ]
            }
        case "remove-from-watchLater":
            return {
                ...state,
                watchLater: [...state.watchLater.filter((item) => item._id !== action.payload._id)]
            }
        default: 
            return {...state}
    }
}