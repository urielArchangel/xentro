import React from "react";

import ActivityLog from "@/app/src/FE/admin/overview/components/ActivityLog";
import OverviewDataSection from "./OverviewDataSection";
import { fetchAppData, fetchUsers } from "@/app/src/BE/helpers";
const Overview = async() => {
  const app  = await fetchAppData()
  const users = await fetchUsers()
  return (
    <section className="text-4xl text-black  ">
      <OverviewDataSection />
      <ActivityLog  appString={JSON.stringify(app)} usersString={JSON.stringify(users)} />
    </section>
  );
};

export default Overview;
