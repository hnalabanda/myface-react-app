import React,{Component} from 'react';

import './Posts.scss';

function Posts(props){
    let currentDate=new Date();
    
        return(
            
            <div>
                {props.count} Posts on {currentDate} {let currentDate=new Date();document.write( currentDate.getDate()+"-"+currentDate.getMonth()+"-"+currentDate.getFullYear());}
                    <a>Create a new post</a>
            </div>
        );
  
}
export default Posts;

