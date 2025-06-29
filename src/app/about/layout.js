"use client";
import Nav from "../components/Nav";


const AboutLayout = ({ children }) => {
  return (
    <div className="flex container h-[calc(100vh-104px)] p-2" >
      <Nav />
      <div className="p-6  relative w-full rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default AboutLayout;
