import { useParams } from "react-router-dom";
import useFetch from "../services/useFetch";

const BlogDetails = ({title}) => {
  const { id } = useParams();
  const { data:blog, isLoading } = useFetch(`/api/blogs/${id}`)

  return (
    <div>
      <h1>Blog Details - {id} </h1>
      {isLoading && <div>Loading...</div>}
      {blog && <p>{blog.title}</p>}
      <p>{title}</p>
    </div>
   );
}

BlogDetails.defaultProps = {
  title: 'Hello'
}

export default BlogDetails;

