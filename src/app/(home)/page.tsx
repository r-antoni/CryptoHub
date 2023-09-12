"use client"
import Header from "@/components/Header";
import Ticker from "@/components/Ticker";



export default function Home() {
    return (
        <div>
            {/* Header */}
            <Header />
            {/* Trending */}
            <div className=" text-center">
                <Ticker />
                <p className="text-gray-400">Powered by <a href="/" target="_blank" className="underline text-gray-600">Binance API</a></p>
            </div>
            {/* C-List */}
            <div className="mt-20"></div>
        </div>
    );
}
