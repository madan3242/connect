import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const { login } = useAuth();

  const handleChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [name]: e.target.value
    });
  };

  const handleLogin =async (e: React.MouseEvent) => {
    e.preventDefault();
    await login(data)
  };
  return (
    <div
      className="w-screen h-screen relative flex items-center justify-center bg-blue-50"
    >
      <div className="w-96 h-auto bg-blue-200 p-4 px-6 rounded-lg">
        <h2 className="text-2xl font-bold mx-4 text-blue-500">Login</h2>
        <form className="flex flex-col items-center justify-center">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 m-4 mb-6 rounded"
            value={data.username}
            onChange={handleChange("username")}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 m-4 mb-6 rounded"
            value={data.password}
            onChange={handleChange("password")}
          />
          <button
            className="mb-3 bg-blue-400 w-full p-2 m-4 rounded text-white hover:bg-blue-500 disabled:bg-blue-400/50"
            disabled={Object.values(data).some((val) => !val)}
            onClick={handleLogin}
          >
            Login
          </button>
          <div>
            <p className='mb-3'>Don't have account? <Link to={'/signup'}>Signup</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;