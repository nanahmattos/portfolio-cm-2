"use client";

const ProjetosLayout = ({ children }) => {
  return (
    <div className="h-full  md:h-[calc(100vh-104px)] flex container p-2" >
      <main className="w-full" >
        {children}
      </main>
      
    </div>
  );
};

export default ProjetosLayout;
