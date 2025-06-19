"use client";
import Nav from "../components/Nav";


const AboutLayout = ({ children }) => {
  return (
    <div className="flex container h-[calc(100vh-120px)]" >
      <Nav />
      <div className="p-6 w-full rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default AboutLayout;
