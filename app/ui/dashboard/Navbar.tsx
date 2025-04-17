const Navbar = () => {
  return (
    <div className="flex font-bold z-10 relative text-black my-5 mx-10 px-10 bg-white justify-between rounded-full items-center h-16 shadow-lg">
      <h1>Mount Trading PLC</h1>
      <ul className="flex flex-row gap-8">
        <li>Home</li>
        <li>About</li>
        <li>Products</li>
      </ul>
    </div>
  );
};

export default Navbar;
