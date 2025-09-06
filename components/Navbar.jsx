import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-[60px] bg-black/70 backdrop-blur-md border-b border-gray-700 shadow-[0_0_15px_rgba(55,65,81,0.6)] flex items-center justify-between px-8 z-50">
      <div className="text-gray-300 font-extrabold text-2xl tracking-wider">
        ⚔️ DarkRealm
      </div>

      <div className="flex gap-6 text-gray-300 font-bold">
        <Link href="/" className="hover:text-white transition-all duration-300">
          Home
        </Link>
        <Link
          href="/login"
          className="hover:text-white transition-all duration-300"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="hover:text-white transition-all duration-300"
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
