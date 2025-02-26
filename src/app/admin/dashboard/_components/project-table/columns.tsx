"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { formatCurrency } from "@/lib/utils";
import { CellAction } from "./actions";

// Define the type for our project data
export type Project = {
  fullName: string;
  email: string;
  c1Team: string;
  projectName: string;
  projectDescription: string;
  cost: string;
  timeline: string;
};

export const columns: ColumnDef<Project>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "projectName",
    header: "Project Name",
    cell: ({ row }) => <div className="font-medium">{row.getValue("projectName")}</div>,
  },
  {
    accessorKey: "fullName",
    header: "Contact Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "c1Team",
    header: "Team",
  },
  {
    accessorKey: "projectDescription",
    header: "Description",
    cell: ({ row }) => (
      <div className="max-w-[300px] truncate" title={row.getValue("projectDescription")}>
        {row.getValue("projectDescription")}
      </div>
    ),
  },
  {
    accessorKey: "cost",
    header: "Cost",
    cell: ({ row }) => {
      // Convert the cost string to a number for formatting
      const value = parseFloat(row.getValue("cost"));
      return formatCurrency(value);
    },
  },
  {
    accessorKey: "timeline",
    header: "Timeline",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  }
];
