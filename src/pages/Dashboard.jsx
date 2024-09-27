import React, { useRef } from "react";
import DashboardStatsGrid from "../components/DashboardStatsGrid";
import Cards from "../components/Cards";

export default function Dashboard({ scrollToChiller, scrollToFault }) {
	return (
	  <div className="flex flex-col gap-4">
		<DashboardStatsGrid />
		<div className="flex flex-row gap-4 w-full">
		  <Cards scrollToChiller={scrollToChiller} scrollToFault={scrollToFault} />
		</div>
	  </div>
	);
  }
  
