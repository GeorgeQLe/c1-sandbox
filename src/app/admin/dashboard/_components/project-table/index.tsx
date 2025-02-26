"use client";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { columns, type Project } from "./columns";
import { useState } from "react";
import { Row } from "@tanstack/react-table";

const mockData: Project[] = [
  {
    fullName: "John Doe",
    email: "john.doe@us.af.mil",
    c1Team: "Engineering",
    projectName: "Project Alpha",
    projectDescription: "A new system for managing aircraft maintenance schedules",
    cost: "250000",
    timeline: "12 months",
  },
  {
    fullName: "Jane Smith",
    email: "jane.smith@us.af.mil",
    c1Team: "Cyber",
    projectName: "Project Beta",
    projectDescription: "Enhanced cybersecurity monitoring platform",
    cost: "180000",
    timeline: "8 months",
  },
  {
    fullName: "Mike Johnson",
    email: "mike.johnson@us.af.mil",
    c1Team: "Operations",
    projectName: "Project Gamma",
    projectDescription: "Streamlined mission planning toolkit",
    cost: "320000",
    timeline: "15 months",
  },
];

export const ProjectTable = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  
  const handleDelete = (rows: Row<Project>[]) => {
    setIsDeleting(true);
    // Here you would implement the actual delete functionality
    console.log("Deleting rows:", rows);
    setTimeout(() => {
      setIsDeleting(false);
    }, 1000);
  };

  return (
    <div className="max-w-screen-2xl -mt-28 mx-auto pb-10 w-full">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="line-clamp-1 text-xl">
            Projects
          </CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={mockData}
            disabled={isDeleting}
            filterKey="projectName"
            onDelete={handleDelete}
          />
        </CardContent>
      </Card>
    </div>  
  );
};