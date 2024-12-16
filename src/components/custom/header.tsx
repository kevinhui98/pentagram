"use client"

import { Home, PlusSquare, User } from "lucide-react";
// import { Avatar } from "../ui/avatar";

export default function Header(){
    return (
        <div className="flex flex-row w-full h-10 justify-between">
            <h1 className="text-4xl">Welcome to Pentagram</h1>
            <div className="flex gap-10">
                <button>
                    <Home />
                </button>
                <button>
                    <PlusSquare />
                </button>
                <button>
                    {/* <Avatar /> */}
                    <User />
                </button>
            </div>
        </div>
    );
}