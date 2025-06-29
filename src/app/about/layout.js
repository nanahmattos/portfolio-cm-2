"use client";
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";

const AboutLayout = ({ children }) => {
  return (
    <div className="flex container h-[calc(100vh-125px)]  md:h-[calc(100vh-104px)] p-2">
      <Nav />
      <main className="p-6 relative w-full rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
        {children}
      </main>
      <NavMobile />
    </div>
  );
};

export default AboutLayout;
