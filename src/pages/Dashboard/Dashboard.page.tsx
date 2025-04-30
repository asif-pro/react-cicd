import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard.page</h1>
      <Link to="/about">
        <button>Go to Blogs</button>
      </Link>
    </div>
  );
};

export default Dashboard;
