"use client";
import Navbar from "@/components/navbar";

import { ProjectTable } from "./_components/project-table";

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProjectTable />
    </div>
  );
}