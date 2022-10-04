import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import Loading from '../componants/Loading';
import axios from 'axios';
import { ViewPosts } from './ViewPosts';


export const UserPost = () => {
    //Id of the clicked user 
    const { id } = useParams();
    //store all data related to the same user 
    const [Posts, setPosts] = useState([]);
    const [loadingData, setLoadingData] = useState(false)
    // Filtering all data related to the same ID
    const AllPosts = Posts.filter((post) => post.userId == id)


    let GetPosts = async () => {
        //get data from the API and distructing it ...
        try {
            setLoadingData(true);
            let { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
            setPosts(data);
            setLoadingData(false)
        }
        //catch the errors
        catch (error) {
            setLoadingData(false);
        }
    }

    useEffect(() => {
        //fetching API
        GetPosts()
    }, [])


    //check if the fetching from API finished or still in progress
    if (loadingData) {
        return <Loading />
    }


    return (
        <div className="container">
            <h3>All User Posts ...</h3>
            <section>
                {
                    // maping on all data and send it to ViewPost componant to display it 
                    AllPosts.map((post, index) => {
                        return <ViewPosts key={index} {...post} />
                    })
                }

            </section>
        </div>
    )
}
