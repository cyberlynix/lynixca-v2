import WebLayout from "@/components/layouts/WebLayout";
import Head from "next/head";
import CyberImage from "@/components/CyberImage";
import { useEffect, useState } from "react";
import moment from "moment";

export default function StreamTool() {
    const [timeLeft, setTimeLeft] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const targetTime = moment("2023-08-02 14:00:00"); // 2 PM August 2nd in UTC
            const currentTime = moment().utcOffset(-240); // Assuming AST with no daylight saving
            const diff = targetTime.diff(currentTime);

            if (diff <= 0) {
                clearInterval(interval);
                setTimeLeft("00:00");
            } else {
                const duration = moment.duration(diff);
                const formattedTime = `${String(duration.hours()).padStart(2, "0")}:${String(duration.minutes()).padStart(2, "0")}:${String(duration.seconds()).padStart(2, "0")}`;
                setTimeLeft(formattedTime);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Head>
                <title>LynixCA - Stream Tool</title>
                <meta name="title" content="LynixCA - Stream Tool" />
                <meta name="description" content="Used for @cyberlynix's streams." />
                <meta name="keywords" content="cybersecurity, student, lynix, lynix.ca, furry, sysadmin, it, pentesting, devops" />
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
            </Head>
            <div>
                <div className="bg-gradient-to-r from-cyan-700 to-green-700 py-5 w-full animated-gradient flex items-center p-5">
                    <img src="/imgs/LynixCute.png" className="h-[60px]" />
                    <div className="flex-1 items-center pl-5">
                        <h1 className="text-2xl">Palia Closed-Beta Launch with <span className="text-white">Lynix</span></h1>
                    </div>

                    <div className="flex items-center space-x-5">
                    <p className="p-2 bg-darker px-4 flex hidden">
                            <span>{timeLeft}</span>
                    </p>
                    <p className="p-2 bg-darker px-4 flex hidden">
                            <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-6 h-6 mr-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                            </svg>
                            <span>Last Donator: lynixthelynx</span>
                    </p>
                    <p className="p-2 bg-darker px-4 flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                            </svg>
                            <span>Followers: 105/150</span>
                    </p>
                    </div>
                </div>
            </div>
        </>
    )
}