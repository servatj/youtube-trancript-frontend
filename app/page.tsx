"use client";

import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { FaYoutube } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-danger">
          YouTube Transcriber
        </h1>
        <p className="mt-6 text-lg leading-8 text-default-600">
          Transform any YouTube video into text instantly. Just paste the video ID or URL and get started.
        </p>
      </div>

      <div className="w-full max-w-2xl mx-auto">
        <div className="flex gap-2">
          <Input  
            placeholder="Enter YouTube video ID (e.g., dQw4w9WgXcQ)"
            size="lg"
            startContent={
              <FaYoutube className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            endContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">.com</span>
              </div>
            }
            classNames={{
              input: "text-md",
            }}
          />
          <Button
            size="lg"
            color="primary"
            className="px-8"
            startContent={<IoSearchOutline className="text-xl" />}
          >
            Transcribe
          </Button>
        </div>
        <p className="mt-2 text-small text-default-400 text-center">
          Example: dQw4w9WgXcQ or https://www.youtube.com/watch?v=dQw4w9WgXcQ
        </p>
      </div>
    </main>
  );
}
