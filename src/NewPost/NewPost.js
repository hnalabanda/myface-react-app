﻿import React,{useState} from "react";

export function NewPost(){
 /*   const[ImageUrl,setImageURL]=useState("");
    const[Message,setMessage]=useState("");
    const[UserId,setUserID]=useState("");
    */
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
        alert("the form has been submitted");
        event.preventDefault();
    }
    
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <textarea name="Message" placeholder="Enter your post" value={state.Message} onChange={updateForm}>
         
            </textarea><br/>

                <input type="text" name="ImageUrl" placeholder="Enter the URL for your image" value={state.ImageURL} onChange={updateForm}/><br/>

                <input type="text" name="UserId" placeholder="Enter the UserId" value={state.UserID} onChange={updateForm}/>


                <br/>
                <input type="submit" value="Create" className="myface-createbtn"/>
            </form>
        </div>
    );
}