import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

export const ViewPosts = ({ title, body }) => {

    //showinfo used to show and hide the body content 
    const [showInfo, setShowInfo] = useState(false);


    return (

        <article className='Post'>
            <header>
                <h4>{title}</h4>
                <button className='Toggelbtn' onClick={() => setShowInfo(!showInfo)}>
                    {/* some react icone  */}
                    {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            {/* used to check if showInfo true will display the body  */}
            {showInfo && <p className='info'>{body}</p>}
        </article>
    )
}
