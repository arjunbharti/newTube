import React, { createContext, useContext, useReducer } from 'react'
import { likedReducer } from '../reducers/likedVideos-reducer'

const LikedVideoContext = createContext(null);
const useLikedVideo = () => useContext(LikedVideoContext);

const LikedVideoProvider = ({ children }) => {
    const [likedState, likedDispatch] = useReducer(likedReducer, {
        liked: []
    });
    return (
        <LikedVideoContext.Provider value={{ likedState, likedDispatch }}>
            {children}
        </LikedVideoContext.Provider>
    )
}

export { useLikedVideo, LikedVideoProvider };