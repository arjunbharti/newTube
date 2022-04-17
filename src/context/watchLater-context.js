import { createContext, useContext, useReducer } from 'react';
import { watchLaterReducer } from '../reducers/watchLater-reducer';

const WatchLaterContext = createContext(null);
const useWatchLater = () => useContext(WatchLaterContext);

const WatchLaterProvider = ({ children }) => {
    const [watchLaterState, watchLaterDispatch] = useReducer(watchLaterReducer, {
        watchLater: []
    });
    return (
        <WatchLaterContext.Provider value={{ watchLaterState, watchLaterDispatch }}>
            {children}
        </WatchLaterContext.Provider>
    )
}

export { useWatchLater, WatchLaterProvider };