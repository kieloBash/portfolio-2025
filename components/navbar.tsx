"use client";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React, { useMemo } from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);

  const links = useMemo(() => {
    return [
      { label: "Projects", href: "/", active: pathname === "/" },
      { label: "Me", href: "/me", active: pathname === "/me" },
    ];
  }, [pathname]);

  return (
    <header className="z-[100] relative">
      <nav className="fixed top-4 left-4 font-bold text-xl">KELS</nav>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 flex justify-center items-center">
        <div className="flex justify-center items-center gap-0 border rounded-full border-neutral-700 bg-neutral-900 px-1 py-1 shadow-2xl">
          {links.map((link) => {
            const className = cn(
              "",
              link.active
                ? "w-24 text-center bg-neutral-800 px-2 flex justify-center items-center h-9 rounded-full text-white text-sm relative"
                : "w-24 text-center px-2 flex justify-center items-center h-9 rounded-full text-white text-sm"
            );
            return (
              <Link key={link.label} href={link.href} className={className}>
                {link.active && (
                  <>
                    <span className="size-12 blur-3xl bg-white rounded-full absolute bottom-1/2" />
                    <span className="absolute w-1/4 h-0.5 bg-white bottom-full mb-1 rounded-t-2xl" />
                  </>
                )}
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
      <nav className="fixed top-4 right-4 flex gap-4 justify-end items-center flex-1">
        <Link href={""}>
          <Button variant={"link"} className="cursor-pointer gap-1">
            LinkedIn <ArrowUpRight />
          </Button>
        </Link>
        <Link href={""}>
          <Button variant={"link"} className="cursor-pointer gap-1">
            Resume <ArrowUpRight />
          </Button>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
