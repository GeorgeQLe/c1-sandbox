"use client";
import Navbar from "@/components/navbar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const mockData = [
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

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Full Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Team</TableHead>
                <TableHead>Project</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Cost</TableHead>
                <TableHead>Timeline</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockData.map((project, index) => (
                <TableRow key={index}>
                  <TableCell>{project.fullName}</TableCell>
                  <TableCell>{project.email}</TableCell>
                  <TableCell>{project.c1Team}</TableCell>
                  <TableCell>{project.projectName}</TableCell>
                  <TableCell className="max-w-xs truncate">
                    {project.projectDescription}
                  </TableCell>
                  <TableCell>${project.cost}</TableCell>
                  <TableCell>{project.timeline}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}