import React from 'react'
import { Link } from 'react-router-dom'

export const UserPage = ({username , name , email , website , phone , company ,address ,id}) => {

    //this componant for view single user data in a Card 
    
    return (
        <div>
            <div className="card">
                <h1>{name}</h1>
                <p><span>Job: </span>{company.bs}</p>
                <p><span>User Name: </span> {username}</p>
                <p><span>Phone: </span> {phone}</p>
                <p><span>Email: </span>{email}</p>
                <p><span>Address: </span> <br/> {`${address.street} ST. ${address.city}`}</p>
                <p><span>Company: </span> {company.name}</p>
                <div className='userLink'>
                    <a href={`https://${website}`} target="_blank" rel="noreferrer">{`Visit ${website}`} </a>
                </div>
                <div className="buttonContainer">
                    <Link to={`/home/${id}`} className="myButton">Show Posts!</Link>
                </div>
            </div>
        </div>
    )
}
