/* eslint-disable @next/next/no-img-element */
"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MarketData } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export const columns: ColumnDef<MarketData>[] = [
  {
    accessorKey: "#",
    header: "#",
    cell: ({ row }) => <div className="capitalize">{row.index + 1}</div>,
  },
  {
    accessorKey: "exchangeName",
    header: () => <h1 className="text-gray-200">Exchange</h1>,
    cell: ({ cell, column, row }) => {
      return (
        <Link
          href={row.original.tradeUrl}
          className="capitalize inline-flex items-center gap-2"
        >
          <img
            src={row.original.logoUrl}
            width={25}
            height={25}
            alt="logo"
            loading="lazy"
          />
          <p className="text-blue-300">{row.getValue("exchangeName")}</p>
        </Link>
      );
    },
  },
  {
    accessorKey: "pair",
    header: () => <h1 className="text-gray-200">Pair</h1>,
    cell: ({ row }) => <div className="capitalize text-blue-300">RXT/USDT</div>,
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <button
        onClick={() => {
          column.toggleSorting(column.getIsSorted() !== "desc");
        }}
        className="text-right flex gap-1 justify-center items-center text-gray-200"
      >
        Price
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-gray-400">{formatted}</div>;
    },
  },
  {
    accessorKey: "spread",
    header: ({ column }) => (
      <button
        onClick={() => {
          column.toggleSorting(column.getIsSorted() !== "desc");
        }}
        className="text-right flex gap-1 justify-center items-center text-gray-200"
      >
        Spread
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("spread")).toFixed(2);

      // Format the amount as a dollar amount
      return <p className="text-gray-400">{amount}%</p>;
    },
  },
  {
    accessorKey: "dailyVolume",
    header: ({ column }) => (
      <button
        onClick={() => {
          column.toggleSorting(column.getIsSorted() !== "desc");
        }}
        className="text-right flex gap-1 justify-center items-center text-gray-200"
      >
        24h Volume
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("dailyVolume"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <p className="text-gray-400">{formatted}</p>;
    },
  },

  {
    accessorKey: "percentageVolume",
    header: ({ column }) => (
      <button
        onClick={() => {
          column.toggleSorting(column.getIsSorted() !== "desc");
        }}
        className="text-right flex gap-1 justify-center items-center text-gray-200"
      >
        Volume %
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => {
      return (
        <p className="text-gray-400">
          {(row.getValue("percentageVolume") as number).toFixed(2)}%
        </p>
      );
    },
  },
  {
    accessorKey: "lastUpdated",
    header: () => <h1 className="text-gray-200">Last Updated</h1>,
    cell: ({ row }) => {
      var ONE_HOUR = 60 * 60 * 1000; /* ms */

      const date = row.getValue("lastUpdated") as Date;
      if (Date.now() - Date.parse(date.toISOString()) <= ONE_HOUR)
        return <h1 className="text-tertiary">Recently</h1>;
      return <div>{date.toLocaleDateString()}</div>;
    },
  },
];

export default function MarketTable({ data }: { data: MarketData[] }) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full h-full">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
