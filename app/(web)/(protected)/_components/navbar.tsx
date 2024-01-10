"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { UserButton } from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-secondary flex justify-between items-center p-4 lg:px-20  w-full shadow-sm">
      <div className="flex gap-x-2 ">
        <Button
          asChild
          variant={pathname === "/server" ? "default" : "link"}
          className=" hover:bg-slate-200 hover:border-none decoration-transparent "
        >
          <Link href="/server">Page 1</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/client" ? "default" : "link"}
          className=" hover:bg-slate-200 hover:border-none decoration-transparent "
        >
          <Link href="/client">Page 2</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/admin" ? "default" : "link"}
          className=" hover:bg-slate-200 hover:border-none decoration-transparent "
        >
          <Link href="/admin">Page 3</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/settings" ? "default" : "link"}
          className=" hover:bg-slate-200 hover:border-none decoration-transparent "
        >
          <Link href="/settings">Settings</Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  );
};
