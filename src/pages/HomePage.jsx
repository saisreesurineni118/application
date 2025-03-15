import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Welcome to the Ticket System</h1>
      <Link to="/login" className="mt-4 bg-blue-500 text-white p-2 rounded">Login</Link>
      <Link to="/register" className="mt-2 bg-green-500 text-white p-2 rounded">Register</Link>
    </div>
  );
};

export default HomePage;