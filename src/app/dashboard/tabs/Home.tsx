import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EyeIcon } from "lucide-react"
import { IndexData } from "@/interfaces";
import Image from "next/image";

interface Props {
    data: IndexData[];
}

const colors: any = {
  buy: "bg-advgreen",
  sell: "bg-advred",
  hold: "bg-advyellow"
};
const letters: any = {
  buy: "B",
  sell: "S",
  hold: "H"
};
const images: any = {
  btc: "btc.png",
  eth: "eth.png",
  sol: "sol.png",
  near: "near.png",
  blackdragon: "blackdragon.jpg"
};

const Home = ({ data }: Props) => {
    return (
        <div className="flex flex-col gap-4">
            {data.map((item: any, index: number) => (
                <Card key={index} className="">
                    <CardContent className="flex flex-row gap-4 justify-between items-center h-full !p-2">
                        <div className="flex flex-row gap-2 items-center justify-between">
                            <Image src={`/crypto/${images[item.symbol]}`} alt={item.name} width={20} height={20} />
                            <div className="font-bold truncate max-w-[50px]">{item.name}</div>
                            <div className="font-bold">{item.currentPrice}</div>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <div className="flex flex-row gap-1 items-center">
                                {item.trend.map((color: string, idx: number) => (
                                    <div key={idx}
                                        className={`${colors[color]} flex flex-row gap-1 items-center justify-center text-white font-bold`}
                                        style={{ width: idx === 0 ? "25px" : "20px", height: idx === 0 ? "25px" : "20px" }}
                                    >
                                        {letters[color]}
                                    </div>
                                ))}
                            </div>
                            <Button variant={"outline"} size={"sm"} className="bg-toradleyellow text-black text-xs">
                                <EyeIcon className="w-4 h-4" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default Home;
