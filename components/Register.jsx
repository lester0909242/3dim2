"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const API = process.env.NEXT_PUBLIC_API_URL;

const Register = () => {
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/api/auth/register`, formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      setSuccess(true);
      setTimeout(() => setSuccess(false), 1500);
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
      <div className="w-full max-w-lg bg-black/70 backdrop-blur-md rounded-2xl shadow-[0_0_25px_rgba(55,65,81,0.6)] p-8 border border-gray-700">
        <h1 className="text-3xl font-bold text-center text-gray-300 mb-6 tracking-widest drop-shadow-[0_0_5px_rgba(55,65,81,0.8)]">
          Create Account
        </h1>

        {success && (
          <div className="text-center py-3 bg-green-600 text-white font-bold rounded-lg mb-5 animate-pulse">
            ✅ Registered successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {["username", "firstname", "lastname", "email", "password"].map(
            (field) => (
              <input
                key={field}
                type={
                  field === "email"
                    ? "email"
                    : field === "password"
                    ? "password"
                    : "text"
                }
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                name={field}
                value={formData[field]}
                onChange={onChange}
                className="w-full h-[50px] rounded-md px-4 bg-black/70 text-gray-200 border border-gray-600 focus:ring-2 focus:ring-gray-400 outline-none placeholder-gray-500"
                required
              />
            )
          )}

          <button
            type="submit"
            disabled={loading}
            className="h-[50px] bg-gradient-to-r from-gray-800 to-gray-700 text-white font-bold text-lg rounded-md shadow-lg hover:scale-105 hover:shadow-[0_0_15px_rgba(55,65,81,0.9)] transition-all duration-300"
          >
            {loading ? "Registering..." : "Register"}
          </button>

          <button
            type="button"
            onClick={() => router.back()}
            className="h-[50px] bg-gray-600 text-white font-bold text-lg rounded-md hover:bg-gray-500 transition-all duration-300"
          >
            ⬅ Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
