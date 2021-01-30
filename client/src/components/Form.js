import { useState } from "react";

const FormFields = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => { 
    e.preventDefault();
    const blog = { title, author };

    fetch('http://localhost:5000/blogs', {
      method: 'POST', 
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('New Blog Added');
    })
    setTitle('')
    setAuthor('')
  }

  return ( 
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
   );
}
 
export default FormFields;