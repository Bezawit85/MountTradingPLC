const MobileNavbar = ({ menuItems }: { menuItems: string[] }) => {
  return (
    <div className={`flex z-10 relative my-5 mx-5 text-white justify-between`}>
      <h1>Mount Trading PLC</h1>
      <p>Home</p>
    </div>
  );
};

export default MobileNavbar;
