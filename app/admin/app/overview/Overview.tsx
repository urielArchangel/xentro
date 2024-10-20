"use client";
import React from "react";

import ActivityLog from "@/app/src/FE/admin/overview/components/ActivityLog";
import OverviewDataSection from "./OverviewDataSection";
const Overview = () => {
  return (
    <section className="text-4xl text-black  ">
      <OverviewDataSection />
      <ActivityLog />
    </section>
  );
};

export default Overview;
