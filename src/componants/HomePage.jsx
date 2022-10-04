import React from 'react'
import { UserPage } from './UserPage';
import Loading from './Loading'
import { useGlobalContext } from '../Context'



export const HomePage = () => {

    const { LoadingMsg, initial, error } = useGlobalContext();

    //check if fetching the data from API finished or still in progress 
    if (LoadingMsg) {
        return <Loading />
    }
    //check if there is any error in fetching your data 
    if (error.message) {
        return <div className='ErrorMsg'>{error.message}</div>
    }

    return (

        <div className='carsdContainer'>
            <div className="parent">
                {/* maping on all data and send the result to userpage componant to perform it */}

                {initial.map((user, index) => {
                    return <UserPage key={user.id} {...user} />
                })}

            </div>
        </div>
    )
}
