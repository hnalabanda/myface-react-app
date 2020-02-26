import React from 'react'

function Allposts(props) {
    
   
        return (
            <section>
                {props.allposts.map((post) => (
                    <div>
                        <p><b>Posted By:{post.postedBy.firstName}{post.postedBy.lastName}</b>
                            <a></a> PostedAt{post.postedAt}</p>
                        <img src={post.imageUrl}></img>
                        <p>{post.message}</p>
                        <div>
                            <img></img>
                            <img/>
                            <a>Click here to remove this post</a>
                        </div>
                    </div>


                ))}

            </section>
        )
   
}

export default Allposts;