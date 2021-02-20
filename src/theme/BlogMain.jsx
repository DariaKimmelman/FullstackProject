import React from 'react'
import {Jumbotron, CardColumns} from 'react-bootstrap'
import BlogCard from './BlogCard/BlogCard'
import {useState} from 'react'
import background from './background.jpg'
import './BlogMain.css'


function BlogMain(props){
   
    

    async function loadPosts() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
        const data = await response.json();
         return data;
    }
    const [posts, setPosts] = useState('loading')
    loadPosts().then(data=>{
        const htmlPosts = data.map(toBlogCard)
        setPosts(htmlPosts)
    });

    function toBlogCard(item, index){
       return <BlogCard id = {index} posts = {item}/>;
    }
    


    return <div>
         <Jumbotron style={{backgroundColor:"turquoise", marginBottom:'0'}}>
    <h1>Inspiration</h1>
  </Jumbotron>
  <CardColumns className='postsContainer' style={{backgroundImage:`url(${background})`,columnCount:'auto'}} >{posts.slice(90)}</CardColumns>

    </div>
}

export default BlogMain;