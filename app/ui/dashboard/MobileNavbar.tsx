const MobileNavbar = ({ menuItems }: { menuItems: string[] }) => {
  return (
    <div
      className={`flex flex-col z-10 relative my-5 mx-5 text-white justify-between`}
    >
      <h1>Mount Trading PLC</h1>
      {menuItems.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

export default MobileNavbar;
