import { useEffect, useState } from "react";
import axios from 'axios'

const About = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    axios.get('/api/blogs')
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data)
        console.log(data)
      })
    .catch((err) => console.log(err))
  },[])

    return ( 
        <div className="container">
        <h1>About Page</h1>
        { blogs && blogs.map((blog) => <p key={blog._id}>{ blog.title }</p> ) }
        </div>
     );
}
 
export default About;