"use client";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const API = process.env.NEXT_PUBLIC_API_URL;

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/api/auth/login`, formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div
      className="min-h-screen w-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/rpg-bg.jpg')" }}
    >
      <div className="w-full max-w-md bg-black/70 backdrop-blur-md rounded-2xl shadow-[0_0_25px_rgba(55,65,81,0.6)] p-8 border border-gray-700">
        <h1 className="text-3xl font-bold text-center text-gray-300 mb-6 tracking-widest drop-shadow-[0_0_5px_rgba(55,65,81,0.8)]">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={onChange}
            className="w-full h-[50px] rounded-md px-4 bg-black/70 text-gray-200 border border-gray-600 focus:ring-2 focus:ring-gray-400 outline-none placeholder-gray-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={onChange}
            className="w-full h-[50px] rounded-md px-4 bg-black/70 text-gray-200 border border-gray-600 focus:ring-2 focus:ring-gray-400 outline-none placeholder-gray-500"
            required
          />

          <div className="flex items-center justify-between text-gray-400 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-gray-500" /> Keep me
              logged in
            </label>
            <Link
              href="/register"
              className="hover:text-gray-200 transition-all duration-300"
            >
              Register
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="h-[50px] bg-gradient-to-r from-gray-800 to-gray-700 text-white font-bold text-lg rounded-md shadow-lg hover:scale-105 hover:shadow-[0_0_15px_rgba(55,65,81,0.9)] transition-all duration-300"
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
