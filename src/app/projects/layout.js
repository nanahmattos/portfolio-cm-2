"use client";

const ProjetosLayout = ({ children }) => {
  return (
    <div className="flex container p-2" >
      <div className="w-full relative" >
        {children}
      </div>
    </div>
  );
};

export default ProjetosLayout;
