import {useState, createContext} from 'react'

const UserContext = createContext({
    latestNum: 0,
    queue: [],
    setLatestNum: () => {},
    setQueue: () => {},
    status: 'green',
    currentNum: 0,
    setStatus: () => {},
    setCurrentNum: () => {},
    checked: false,
    setChecked: () => {}

});

export const ContextProvider = (props) => {
    
    const [latestNum, setLatestNum] = useState(0);
    const [queue, setQueue] = useState([]);
    const [status, setStatus] = useState('green')
    const [currentNum, setCurrentNum] = useState(0)
    const [checked, setChecked] = useState(false);


    return(
        <UserContext.Provider 
            value={{
                latestNum: latestNum,
                queue: queue,
                setLatestNum: setLatestNum,
                setQueue: setQueue,
                status: status,
                currentNum: currentNum,
                setStatus: setStatus,
                setCurrentNum: setCurrentNum,
                checked: checked,
                setChecked: setChecked

            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContext;
