import WebLayout from "@/components/layouts/WebLayout";
import Head from "next/head";
import CyberImage from "@/components/CyberImage";
import { useEffect, useState } from "react";

export default function NotFound() {

    const startDate = new Date('2023-07-28').getTime();
    
    const [now, setNow] = useState(new Date().getTime());
        
    const difference = now - startDate;
    
    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date().getTime());
        }, 1000);
    
        return () => clearInterval(interval);
    }, []);

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return (
        <>
            <Head>
                <title>LynixCA - 404 Error</title>
                <meta name="title" content="LynixCA"/>
                <meta name="description" content="Take a look at my pages to learn more about my background and achievements!"/>
                <meta name="keywords" content="cybersecurity, student, lynix, lynix.ca, furry, sysadmin, it, pentesting, devops"/>
                <meta name="robots" content="index, follow"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
            </Head>
                <div className="flex justify-center items-center h-screen w-full">
                    <div>
                        <div className="flex justify-center">
                            <CyberImage src="/imgs/stickers/peeking.png" alt="Lynix Cute" containerClassName="h-[250px] w-[300px] mb-5"/>
                        </div>
                        <h1 className="text-3xl text-gray-300 font-cyber text-center">
                            <span className="text-green-700 text-4xl pb-2"><span className="text-cyan-700">{days} Days {hours} Hours {minutes} Minutes {seconds} Seconds</span></span><br/> Galaxy Z Flip 3 <br/><br/>
                            <span className="text-lg">Are we still folding? Durability Timer<br/>The phone must be functional, non-cracked to be considered "Still Folding"</span>
                        </h1>
                    </div>
                </div>
        </>
    )
}