import React, {Component, useEffect, useState} from 'react';
import logo from '../logo.svg';
import '../App.scss';

import Footer from "../Footer/Footer"
import Posts from "../Posts/Posts"
import Allposts from "../allposts/allposts";


function ListPosts() {
    const [allposts,setAllPosts]=useState([]);

    useEffect(
        () => {
            fetch('https://localhost:5001/posts')
                .then(result => result.json())
                .then(data => setAllPosts(data.items))
        }, []
    );

    return (
        <div>
        
            <Posts count={allposts.length}></Posts>
            <Allposts allposts={allposts}/>
            <Footer/>
        </div>
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

export default ListPosts;
