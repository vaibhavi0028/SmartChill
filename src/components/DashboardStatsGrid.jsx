import React from "react";

function HeroSection() {
  return (
    <div className="bg-[#6A9DF0] p-20 h-60 w-29  flex items-center justify-start rounded-2xl hover:scale-105 transition ease-in-out duration-300 hover:bg-[#6A9AC0]">

      <div className="relative max-w-5xl px-8">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-40 bg-[#001F3F] shadow-[0_0_15px_rgba(34,197,94,0.8)]"></div>
        <div className="ml-8">
          <h1 className="text-5xl font-bold text-[#001F3F]">Estimate the chiller plant load</h1>

          <p className="text-xl text-black mt-4 text-[#001F3F]">The world's leading AI-powered developer platform.</p>
          <p className="text-xl text-black mt-4 text-[#001F3F]">
          <p>To access the Models!<span className=" ml-2 bg-[#001F3F] text-white rounded-2xl p-3 text-sm">Hover the card's below </span></p>
          
          </p>
        </div>
      </div>
    </div>
  );
}

export default function DashboardStatsGrid() {
  return (
    <>
      <HeroSection />

      {/* Placeholder for the stats grid */}
      {/* <div className="flex gap-4">
        <BuyerProfilePieChart dataSets={[dataSet1]} />
        <BuyerProfilePieChart dataSets={[dataSet2]} />
        <BuyerProfilePieChart dataSets={[dataSet3]} />
      </div> */}
    </>
  );
}

// function BoxWrapper({ children }) {
//   return (
//     <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center h-30 w-1">
//       {children}
//     </div>
//   );
// }
