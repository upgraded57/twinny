import Nav from "@/components/nav/Nav";
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Nav type={2} />
      <div className="w-full h-screen flex items-center justify-center">
        <div className="max-w-sm text-center">
          <h1 className="h-text text-4xl">You seem to be lost!</h1>
          <p className="p-text  my-4">
            We can't find the page you want to access on our website at the
            moment. Let's take you back home
          </p>
          <Link to="/">
            <Button className="bg-pry-clr p-text">Go Home</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
