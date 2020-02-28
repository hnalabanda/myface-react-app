import React from 'react'
import {Link} from 'react-router-dom';
import './allposts.scss';

function Allposts(props) {
    
   
        return (
            <article className="posts-container">
        
                {props.allposts.map((post) => (
                    <section className="post-container">
                        <div className="post-header">
                          <p>  <Link to={"/users/"+post.postedBy.id}><img className="profileClass" src={post.postedBy.profileImageUrl}></img></Link><b>{post.postedBy.username}</b>
                           </p>
                        </div>
                        <div>
                            PostedAt{post.postedAt} <br/>
                            <img src={post.imageUrl}></img>
                            <p className="messageclass">{post.message}</p>
                            <div>
                                <img src='/like.png'></img>
                                <img src='/dislike.png'/>
                                <a className="buttonclass">Remove post</a>
                            </div>
                        </div>
                    </section>

                ))}

          
            </article>    
        )
   
}

export default Allposts;