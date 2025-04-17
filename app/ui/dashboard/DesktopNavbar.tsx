const DesktopNavbar = ({ menuItems }: { menuItems: string[] }) => {
  return (
    <div
      className={`flex z-10 relative my-5 mx-10 px-10 bg-white justify-between rounded-full items-center h-16 shadow-lg`}
    >
      <h1 className={`font-bold`}>Mount Trading PLC</h1>
      <ul
        className={`flex flex-row gap-8 text-black font-bold cursor-pointer text-md`}
      >
        {menuItems.map((item, index) => (
          <li key={index} className="hover:text-blue-600">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesktopNavbar;
