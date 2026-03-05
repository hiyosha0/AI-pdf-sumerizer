"use client";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../sheet";
import NavLink from "./nav-link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="lg:hidden p-2 text-gray-600 bg-white/20 transition-colors"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-6 mt-8">
          <NavLink
            href="/#pricing"
            className="text-lg"
            onClick={() => setOpen(false)}
          >
            Pricing
          </NavLink>

          <SignedIn>
            <NavLink
              href="/dashboard"
              className="text-lg"
              onClick={() => setOpen(false)}
            >
              Your summaries
            </NavLink>
            <NavLink
              href="/upload"
              className="text-lg"
              onClick={() => setOpen(false)}
            >
              Upload a pdf
            </NavLink>

            <div className="flex items-center gap-3 pt-4 border-t">
              <div className="border-2 rounded-full flex justify-center items-center border-blue-600 shadow-lg">
                <UserButton />
              </div>
              <span className="text-sm text-gray-600">Your Account</span>
            </div>
          </SignedIn>

          <SignedOut>
            <NavLink
              href="/sign-in"
              className="text-lg"
              onClick={() => setOpen(false)}
            >
              Sign In
            </NavLink>
          </SignedOut>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
