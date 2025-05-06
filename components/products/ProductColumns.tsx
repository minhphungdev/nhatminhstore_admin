"use client";

import { ColumnDef } from "@tanstack/react-table";
import Delete from "../custom ui/Delete";
import Link from "next/link";

export const columns: ColumnDef<ProductType>[] = [
  {
    accessorKey: "title",
    header: "Tiêu đề sản phẩm",
    cell: ({ row }) => (
      <Link
        href={`/products/${row.original._id}`}
        className="hover:text-red-1"
      >
        {row.original.title}
      </Link>
    ),
  },
  {
    accessorKey: "category",
    header: "Loại sản phẩm",
  },
  {
    accessorKey: "collections",
    header: "Bộ sưu tập",
    cell: ({ row }) => row.original.collections.map((collection) => collection.title).join(", "),
  },
  {
    accessorKey: "price",
    header: "Giá sản phẩm ($)",
  },
  {
    accessorKey: "expense",
    header: "Chi phí ($)",
  },
  {
    id: "actions",
    cell: ({ row }) => <Delete item="product" id={row.original._id} />,
  },
];
