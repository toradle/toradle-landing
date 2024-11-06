"use client"

import * as React from "react";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { IndexData } from "@/interfaces";
import Home from "./tabs/Home";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("home");

  const data: IndexData[] = [
    { id: '1', symbol: 'btc', name: "BTC", currentPrice: "$50,000", trend: ["buy", "sell", "hold", "buy", "sell"] },
    { id: '5426', symbol: 'sol', name: "SOL", currentPrice: "$150", trend: ["sell", "sell", "hold", "hold", "buy"] },
    { id: '1027', symbol: 'eth', name: "ETH", currentPrice: "$150", trend: ["sell", "sell", "hold", "hold", "buy"] },
    { id: '6535', symbol: 'near', name: "NEAR", currentPrice: "$150", trend: ["sell", "sell", "hold", "hold", "buy"] },
    { id: '29627', symbol: 'blackdragon', name: "BLACKDRAGON", currentPrice: "$150", trend: ["sell", "sell", "hold", "hold", "buy"] },
    // Add more data as needed
  ];

  return (
    <div className="p-4 h-screen">
      <header className="text-center text-2xl font-bold mb-4 text-white">Dashboard</header>
      <Tabs className="flex flex-col gap-4" value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="flex justify-around ">
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="analysis">Analysis</TabsTrigger>
        </TabsList>
        <TabsContent value="home">
          <Home data={data} />
        </TabsContent>
        <TabsContent value="portfolio">
          <div className="mt-4">Portfolio content goes here.</div>
        </TabsContent>
        <TabsContent value="analysis">
          <div className="mt-4">Analysis content goes here.</div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
