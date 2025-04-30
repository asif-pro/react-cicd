import { useState } from "react";
import blogData from "../data";

const Blogs = () => {
  const [blogs, setBlogs] = useState(blogData);
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!name || !color) return;

    const newBlog = {
      id: blogs.length + 1,
      name,
      color,
    };

    setBlogs([...blogs, newBlog]);
    setName("");
    setColor("");
  };

  return (
    <div>
      <h2>Blogs</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id} style={{ color: blog.color }}>
            {blog.name}
          </li>
        ))}
      </ul>

      {/* Form to Add New Blog */}
      <h3>Add a New Blog</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Blog Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Text Color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
};

export default Blogs;
