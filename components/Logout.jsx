"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

const API = process.env.NEXT_PUBLIC_API_URL;

const Logout = () => {
  const router = useRouter();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/api/auth/logout`, {}, { withCredentials: true });
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleLogout}
      className="bg-black/70 backdrop-blur-md p-6 rounded-xl shadow-[0_0_25px_rgba(55,65,81,0.6)] border border-gray-700 text-center mt-6"
    >
      <button
        type="submit"
        className="px-6 py-2 bg-gradient-to-r from-gray-800 to-gray-700 text-white font-bold rounded-md shadow-lg hover:scale-105 hover:shadow-[0_0_15px_rgba(55,65,81,0.9)] transition-all duration-300"
      >
        Logout
      </button>
    </form>
  );
};

export default Logout;
