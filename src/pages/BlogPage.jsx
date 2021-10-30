import Post from "../components/Blog/Post";
import "../components/Blog/Blog.css";
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
