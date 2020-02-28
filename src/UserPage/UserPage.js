import UserPosts from "../UserPosts/UserPosts";

﻿import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import Allposts from "../allposts/allposts";
import Footer from "../Footer/Footer";
import "./UserPage.scss"

export function UserPage(){
    const [allposts,setAllPosts]=useState([]);
    
    const {id}=useParams();

    useEffect(
        () => {
            fetch(`https://localhost:5001/users/${id}`)
                .then(result => result.json())
                .then(data => setAllPosts(data))
        }, []
    );

    return (
        <div className="userpage-background">
            <div><img className="coverpage" src={allposts.coverImageUrl}></img>
                <div><img className="profile-image" src={allposts.profileImageUrl}></img></div>
            </div>
            <div className="user-info">
                <div className="display-name">{allposts.displayName}</div>
                <div>{allposts.email}</div>
                <UserPosts allposts={allposts.posts || []}/>
            </div>

            
      
            
            
            
        </div>
    );
}


export default UserPage