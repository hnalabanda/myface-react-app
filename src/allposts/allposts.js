import React from 'react'
import './allposts.scss';

function Allposts(props) {
    
   
        return (
            <article className="posts-container">
        
                {props.allposts.map((post) => (
                    <section className="post-container">
                    <div>
                      <p><b>Posted By:{post.postedBy.firstName}{post.postedBy.lastName}</b>
                            <a></a> PostedAt{post.postedAt}</p>
                        <img src={post.imageUrl}></img>
                        <p className="messageclass">{post.message}</p>
                        <div>
                            <img src={'like.png'}></img>
                            <img src='dislike.png'/>
                            <a className="buttonclass">Remove post</a>
                        </div>
                    </div>
                    </section>

                ))}

          
            </article>    
        )
   
}

export default Allposts;