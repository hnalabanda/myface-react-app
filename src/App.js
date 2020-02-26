import React, {Component, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import {Header} from "./Header/Header"
import Footer from "./Footer/Footer"
import Posts from "./Posts/Posts"
import Allposts from "./allposts/allposts";


function App() {
    const [allposts,setAllPosts]=useState([]);
    
    useEffect(
        () => fetch('https://localhost:5001/posts')
            .then(result => result.json())
            .then(data => setAllPosts(data.items))
        , []
    );
       
    return (
        <html>
        <head>
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700,800&display=swap" rel="stylesheet"/>
           
        </head>
     
            <body>
            <div>
                <Header/>
                <Posts count={allposts.length}></Posts>
                <Allposts allposts={allposts}/>
                <Footer/>
            </div>

            </body>
        </html>
    
     
       

    );
}

/*class App extends Component{
    state={
        allposts:[]
    }
    componentDidMount(){
        fetch('https://localhost:5001/posts')
            .then((result)=>{
                return result.json();
            })
            .then((data)=>{
                this.setState({allposts:data})
                console.log(data);
            })
    }
    render(){
        return (
            <Allposts allposts={this.state.allposts}/>

        ); 
    }
 
}*/

export default App;
