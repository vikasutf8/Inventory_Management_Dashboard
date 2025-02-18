import React from "react";
import Navbar from "@/app/(components)/Navbar";
const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`light flex bg-green-50 text-gray-900 w-full min-h-screen`}>
      <main className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 md:pl-24`}>
        <Navbar/>
        {children}</main>

        VIKAS
    </div>
  );
};

export default DashboardWrapper;
