"use client";
// import NavMobile from "../components/NavMobile";
const ProjetosLayout = ({ children }) => {
  return (
    <div className="h-full md:h-[calc(100vh-104px)] flex container p-1 md:p-2" >
      <main className="w-full" >
        {children}
      </main>
      {/* <NavMobile /> */}
      
    </div>
  );
};

export default ProjetosLayout;
