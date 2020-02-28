import React, {Component, useEffect, useState} from 'react';

import './Posts.scss';
import {NewPost} from "../NewPost/NewPost";

function Posts(props){
    const [showNewPostForm, setShowNewPostForm] = useState(false);
    const[state,setState]=useState({
        ImageUrl:"",
        Message:"",
        UserId:""
    });

    function updateForm(event){
        const value=event.target.value;
        setState({
            ...state,
            [event.target.name]:value
        });
    }

    function handleSubmit(event){

        const jsonData={UserId:parseInt(state.UserId),ImageUrl:state.ImageUrl,Message:state.Message};
      
        fetch('https://localhost:5001/posts/create',{method:'POST',headers:{'Content-Type': 'application/json'},body:JSON.stringify(jsonData)})
                .then(result => result.json())
                .catch(error=>console.error('Error:',error));
      
      
        event.preventDefault();
    }
    
    var modal = document.getElementById("myModal");
    // Get the button that opens the modal
    var btn = document.getElementById("myfaceNewpost");
    function openModal(){
        // Get the modal
     
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    // Get the <span> element that closes the modal
    
    function closeModal() {
     
        modal.style.display = "none";
     
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    
    let currentDate=new Date();
    
        return(
            <div>
                <div id="myModal" className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="close" onClick={closeModal}>&times;</span>
                            <h2>Create a new post</h2>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <textarea name="Message" placeholder="Enter your post" value={state.Message} onChange={updateForm}>
                                </textarea><br/>
                                <input type="text" name="ImageUrl" placeholder="Enter the URL for your image" value={state.ImageURL} onChange={updateForm}/><br/>
                                <input type="text" name="UserId" placeholder="Enter the UserId" value={state.UserID} onChange={updateForm}/><br/>
                                <input type="submit" value="Create" className="buttonclass"/>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="posts-menu">
                    {props.count} Posts on {currentDate.getDate() + "-" + currentDate.getMonth()+"-"+currentDate.getFullYear()}
                    <button className="buttonclass" onClick={openModal}>Create a new post</button>
                   {/*  <button className="buttonclass" onClick={() => setShowNewPostForm(true)}>Create a new post</button>
                    
                    {showNewPostForm && <NewPost/>}*/}
                </div>
            </div>
        );
  
}
export default Posts;

