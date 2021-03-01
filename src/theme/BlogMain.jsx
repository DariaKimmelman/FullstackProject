import React from 'react'
import {Jumbotron, CardColumns} from 'react-bootstrap'
import BlogCard from './BlogCard/BlogCard'
import {useState} from 'react'
import background from './background.jpg'
import './BlogMain.css'


function BlogMain(props){
   
  

    

    function toBlogCard(item, index){
       return <BlogCard onClickOnPost = {props.onClickOnPost} key = {index} posts = {item}/>;
    }
    


    return <div>
         <Jumbotron style={{backgroundColor:"#00ADB5",color:'white', marginBottom:'0', paddingTop: '50px',
      paddingBottom: '50px',
      height: '150px',
      marginTop: '0'}}>
    <h1>Inspiration</h1>
  </Jumbotron>
  <CardColumns className='postsContainer' style={{backgroundImage:`url(${background})`,columnCount:'auto', paddingLeft:'0', minHeight:'500px', marginBottom:'0'}} >{props.posts.map(toBlogCard).slice(90)}</CardColumns>

    </div>
}

export default BlogMain;