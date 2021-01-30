import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../services/useFetch";

const BlogsList = () => {

  const { isLoading, data } = useFetch('/api/blogs')
  const [blogs, setBlogs] = useState([])
  const [toggleForm, setToggleForm] = useState(false) 

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');


  useEffect(() => {
    setBlogs(data)
    console.log('re-render');
  },[data])
  
  const deleteEvent = async (id) => {
    await fetch(`api/blogs/${id}`, {
      method: "DELETE",
    })
    setBlogs(blogs.filter((blog) => blog.id !== id)) 
  }

  const showForm = () => {
    setToggleForm(!toggleForm)
  }

  const handleSubmit = (e) => { 
    e.preventDefault();
    const id = Math.floor(Math.random() * 100) + 1
    const blog = {id, title, author };

    fetch('/api/blogs', {
      method: 'POST', 
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('New Blog Added');
      setTitle('')
      setAuthor('')
      setBlogs([...blogs, blog])
    })
  }

  const check = (id) => {
    console.log(`check box clicked ${id}`);
  }

  const formfield = 
    <div className="m-4">
    <h2> Form </h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
      <label > Blog title : </label>
      <input type="text" className="form-control" required value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="form-group">
      <label > Blog author : </label>
      <input type="text" className="form-control" required value={author} onChange={(e) => setAuthor(e.target.value)} />
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
          {/* <table className="table">
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
            <tbody key={blog._id}>
              <tr>
                <th scope="row"> {blog._id}</th>
                <td> <input type="checkbox" onClick={() =>check(blog.id)}/> </td>
                <td> <Link to={`/blog/${blog._id}`}> {blog.title} </Link></td>
                <td style={{ color: "green" }}>{blog.author} </td>
                <td> <button className="btn btn-danger" onClick={()=>deleteEvent(blog._id)}>Delete</button> </td>
              </tr>
             </tbody>
            )}
          </table> */}
        </div>
     );
}
 
export default BlogsList;