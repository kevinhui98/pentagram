/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
export default function Home() {
    const [inputText, setInputText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [imageDescription, setImageDescription] =
        useState("Generate artwork");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch("/api/generate-image", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ text: inputText }),
            });

            const data = await response.json();
            console.log("data imageUrl", data.imageUrl);
            if (!data.success) {
                throw new Error(data.error || "Failed to generate image");
            }
            console.log(data);
            if (data.imageUrl) {
                const img = new Image();
                img.onload = () => {
                    setImageUrl(data.imageUrl);
                    setImageDescription(data.description);
                };
                img.src = data.imageUrl;
                img.alt = data.description;
            }

            setInputText("");
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        // TODO: Update the UI here to show the images generated

        <div className="min-h-screen flex flex-col justify-between p-8">
            {/* <nav className="flex justify-between items-center gap-4">
                <h1 className="text-3xl font-bold">Pentagram</h1>
                <div className="flex items-center gap-5">
                    <p>Display</p>
                    <button className="px-4 py-2 rounded-lg bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors">
                        log in
                    </button>
                </div>
            </nav> */}
            <main className="flex-1 flex flex-col items-center gap-8 mb-8">
                {imageUrl && (
                    <div className="w-full max-w-2xl rounded-lg overflow-hidden shadown-lg">
                        <img
                            src={imageUrl}
                            alt={imageDescription}
                            className="w-full h-auto"
                        />
                    </div>
                )}
            </main>

            <footer className="w-full max-w-3xl mx-auto">
                <form onSubmit={handleSubmit} className="w-full">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={inputText}
                            onChange={e => setInputText(e.target.value)}
                            className="flex-1 p-3 rounded-lg bg-black/[.05] dark:bg-white/[.06] border border-black/[.08] dark:border-white/[.145] focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                            placeholder="Describe the image you want to generate..."
                            disabled={isLoading}
                        />
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="px-6 py-3 rounded-lg bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors disabled:opacity-50"
                        >
                            {isLoading ? "Generating..." : "Generate"}
                        </button>
                    </div>
                </form>
            </footer>
        </div>
    );
}
