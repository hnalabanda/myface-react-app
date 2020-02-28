import React from 'react'
import {Link} from 'react-router-dom';
import '../allposts/allposts.scss';

function UserPosts(props) {
    console.log(props);
    return (
        <article className="posts-container">

            {props.allposts.map((post) => (
                <section className="post-container">
              
                    <div>
                        PostedAt{post.postedAt} <br/>
                        <img src={post.imageUrl}></img>
                        <p className="messageclass">{post.message}</p>
                  
                    </div>
                </section>

            ))}


        </article>
    )

}

export default UserPosts;