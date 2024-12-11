"use client";

import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Chip } from "@nextui-org/chip";
import { FaTwitter, FaLinkedin, FaCopy } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";

// Mock transcript data
const mockTranscript = {
  title: "How to Build a Successful Startup | Y Combinator",
  videoId: "0MGNf1BIuxA",
  duration: "15:30",
  transcript: `In this video, I'm going to share the key principles of building a successful startup.
First, you need to solve a real problem. Many founders make the mistake of creating a solution looking for a problem.
Second, talk to your users. This cannot be emphasized enough. Your assumptions about what users want are often wrong.
Third, focus on growth. Without growth, you don't have a startup - you have a small business.
Remember, the goal is to create something people want and to do it in a way that can scale.`,
};

export default function TranscriptPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Video Info Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">{mockTranscript.title}</h1>
        <div className="flex gap-2 items-center">
          <Chip size="sm" color="primary">Video ID: {mockTranscript.videoId}</Chip>
          <Chip size="sm" variant="flat">Duration: {mockTranscript.duration}</Chip>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Transcript Panel */}
        <Card className="lg:col-span-2">
          <CardBody>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Transcript</h2>
              <Button
                variant="flat"
                color="primary"
                startContent={<MdOutlineContentCopy />}
              >
                Copy All
              </Button>
            </div>
            <div className="prose dark:prose-invert max-w-none">
              {mockTranscript.transcript.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardBody>
        </Card>

        {/* Social Media Formatting Panel */}
        <div className="space-y-6">
          <Card>
            <CardBody>
              <h2 className="text-xl font-semibold mb-4">Share Format</h2>
              <Tabs aria-label="Social Media Options" fullWidth>
                <Tab
                  key="twitter"
                  title={
                    <div className="flex items-center gap-2">
                      <FaTwitter />
                      <span>Twitter</span>
                    </div>
                  }
                >
                  <div className="mt-4">
                    <div className="bg-default-100 rounded-lg p-4 mb-4">
                      <p className="text-sm">
                        🧵 Key insights from {mockTranscript.title}:
                        {mockTranscript.transcript
                          .split('\n')
                          .map((line, i) => `\n\n${i + 1}/ ${line}`)
                          .join('')}
                        \n\n🔄 RT appreciated!
                      </p>
                    </div>
                    <Button
                      color="primary"
                      startContent={<FaCopy />}
                      className="w-full"
                    >
                      Copy Thread Format
                    </Button>
                  </div>
                </Tab>
                <Tab
                  key="linkedin"
                  title={
                    <div className="flex items-center gap-2">
                      <FaLinkedin />
                      <span>LinkedIn</span>
                    </div>
                  }
                >
                  <div className="mt-4">
                    <div className="bg-default-100 rounded-lg p-4 mb-4">
                      <p className="text-sm">
                        📺 I just watched an insightful video on {mockTranscript.title}
                        
                        Key takeaways:
                        
                        {mockTranscript.transcript
                          .split('\n')
                          .map(line => `• ${line}`)
                          .join('\n\n')}
                        
                        #StartupAdvice #Entrepreneurship
                      </p>
                    </div>
                    <Button
                      color="primary"
                      startContent={<FaCopy />}
                      className="w-full"
                    >
                      Copy Post Format
                    </Button>
                  </div>
                </Tab>
              </Tabs>
            </CardBody>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardBody>
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-2">
                <Button 
                  className="w-full"
                  color="primary"
                  variant="flat"
                >
                  Download as PDF
                </Button>
                <Button
                  className="w-full"
                  color="primary"
                  variant="flat"
                >
                  Download as TXT
                </Button>
                <Button
                  className="w-full"
                  color="primary"
                  variant="flat"
                >
                  Share Link
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </main>
  );
} 
