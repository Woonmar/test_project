import { useEffect, useState } from "react";
import axios from 'axios'


const About = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    axios.get('/api/blogs')
      .then((res) => {
        setBlogs(res.data)
        console.log('Res:',res.data)
      })
      .catch((err) => console.log(err))
    
    console.log(blogs);
  },[])

    return ( 
        <div className="container">
        <h1>About Page</h1>
        { blogs && blogs.map((blog) => <p key={blog._id}>{ blog.title }</p> ) }
        </div>
     );
}
 
export default About;