"use client";

import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<CustomerType>[] = [
  {
    accessorKey: "clerkId",
    header: "ID khách hàng",
  },
  {
    accessorKey: "name",
    header: "Tên khách hàng",
  },
  {
    accessorKey: "email",
    header: "Email khách hàng",
  },
];
