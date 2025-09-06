const LoginFooter = () => {
  return (
    <footer className="w-full text-center py-4 bg-black/70 backdrop-blur-md border-t border-gray-700 shadow-[0_0_15px_rgba(55,65,81,0.5)] fixed bottom-0 left-0">
      <p className="text-gray-400 text-sm tracking-wide">
        ⚡ Powered by <span className="text-gray-300 font-semibold">DarkRealm</span> | © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default LoginFooter;
