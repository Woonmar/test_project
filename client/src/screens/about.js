import { useEffect, useState } from "react";
const About = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch('/api/blogs')
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