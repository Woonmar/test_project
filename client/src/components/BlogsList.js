import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../services/useFetch";
import axios from "axios"

const BlogsList = () => {

  const { isLoading, data } = useFetch('/api/blogs')
  const [blogs, setBlogs] = useState([])
  const [toggleForm, setToggleForm] = useState(false) 

  const [title, setTitle] = useState('')
  const [snippet, setSnippet] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')
  
  useEffect(() => {
    setBlogs(data)
    console.log('re-render');
    console.log('Data: ', data);
    axios.get('/user')
      .then((result) => console.log('Result login', result.data))
  }, [data])
  
  
  const deleteEvent = async (id) => {
    await axios.delete(`api/blogs/${id}`)
    setBlogs(blogs.filter((blog) => blog._id !== id)) 
  }

  const showForm = () => {
    setToggleForm(!toggleForm)
  }

  const handleSubmit = (e) => {  
    e.preventDefault();
    const blog = { title, snippet, body, author };
    console.log(blog);
    axios.post('/api/blogs', blog)
      .then((res) => {
        console.log('New Blog Added');
        setTitle('')
        setAuthor('')
        setBlogs([...blogs, blog])
      })
      .catch((err) => console.log('ERROR:', err))
    console.log('Submit again');
  }

  const formfield = 
    <div className="m-4">
    <h2> Form </h2> 
    <form onSubmit={handleSubmit}>
      <div className="form-group">
      <label > Blog title : </label>
      <input type="text" className="form-control" name="title" required value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="form-group">
      <label > Blog Snippet : </label>
      <input type="text" className="form-control" name="snippet" required value={snippet} onChange={(e) => setSnippet(e.target.value)} />
      </div>
      <div className="form-group">
      <label > Blog Body : </label>
      <input type="text" className="form-control" name="body" required value={body} onChange={(e) => setBody(e.target.value)} />
      </div>
      <div className="form-group">
      <label > Blog author : </label>
      <input type="text" className="form-control" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <button className="btn btn-success btn-block"> Add Blog</button>
    </form>
  </div>

    return ( 
      <div className="container">
        <button className={toggleForm ? 'btn btn-secondary m-4':'btn btn-success m-4'} onClick={showForm}>
          {toggleForm ? 'Close Form' : 'Show Form'}
        </button>
        {toggleForm ? formfield : null}
        {isLoading && <p>Loading...</p>}
        { blogs && blogs.length }
          <table className="table">
            <thead className="thead-dark">
              <tr>
              <th>#</th>
              <th>Select</th>
              <th>Title</th>
              <th>Author</th>
              <th>Action</th>
              </tr>
            </thead>
          {blogs && blogs.map((blog) =>
            <tbody key={blog.title}>
              <tr>
                <th scope="row"> {blog._id}</th>
                <td> <input type="checkbox" /> </td>
                <td> <Link to={`/blog/${blog._id}`}> {blog.title} </Link></td>
                <td style={{ color: "green" }}>{blog.author} </td>
                <td> <button className="btn btn-danger" onClick={()=>deleteEvent(blog._id)}>Delete</button> </td>
              </tr>
             </tbody>
            )}
          </table>
        </div>
     );
}
 
export default BlogsList;