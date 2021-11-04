import Post from "../../components/Post";
import "./blog.css";
const BlogPage = () => {
  return (
    <section id='Blog'>
      <div className='blog-container'>
        <Post />
      </div>
    </section>
  );
};

export default BlogPage;
