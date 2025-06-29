"use client";

const ProjetosLayout = ({ children }) => {
  return (
    <div className="flex container" >
      <div className="w-full relative" >
        {children}
      </div>
    </div>
  );
};

export default ProjetosLayout;
