import {React, useState, useEffect} from 'react'
import {Jumbotron, CardColumns} from 'react-bootstrap'
import BlogCard from './BlogCard/BlogCard'
import background from './background.jpg'
import './BlogMain.css'
import * as api from "../api"


function BlogMain(props){

  const [posts, setPosts] = useState([])

  useEffect(async()=>{
    const articles = await api.getAll('posts');
    setPosts(articles.data);


  }, [])

   
   
  

    

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
  <CardColumns className='postsContainer' style={{backgroundImage:`url(${background})`,columnCount:'2', paddingLeft:'112px', minHeight:'500px', marginBottom:'0'}} >{posts.map(toBlogCard)}</CardColumns>

    </div>
}

export default BlogMain;