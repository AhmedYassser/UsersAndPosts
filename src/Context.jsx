import React, { useContext, useEffect, useState } from "react"
import axios from 'axios';

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    //project states 
    const [initial, setinitial] = useState([]);
    const [LoadingMsg, setLoading] = useState(false);
    const [error, setError] = useState('');



    let GetUser = async () => {
        //get data from the API and distructing it ...
        try {
            setLoading(true);
            let { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`)
            setinitial(data);
            setLoading(false)
        }
        //catch the errors
        catch (error) {
            setError(error)
            setLoading(false);
        }

    }
     console.log(error)

    //using useEffect to fetch the data once app be ready
    useEffect(() => {
        //fetching API
        GetUser()
    }, [])




    return <AppContext.Provider value={{
        initial,
        LoadingMsg,
        error,
    }}>
        {children}
    </AppContext.Provider>
}


export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider }

