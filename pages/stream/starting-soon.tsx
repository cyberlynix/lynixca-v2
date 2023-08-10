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
                const formattedTime = `${String(duration.minutes()).padStart(2, "0")}:${String(duration.seconds()).padStart(2, "0")}`;
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
            <div className="flex items-center justify-center w-full h-screen">
                <div className="w-full">
                    <div>
                        <div className="bg-dark fixed top-5 left-5 p-5 flex items-center hidden">
                            <img src="https://styles.redditmedia.com/t5_4hgg7c/styles/communityIcon_ofr8y3sz5x9a1.png" alt="Game logo" className="w-10 h-10 mr-3" />
                            <span className="text-white text-2xl">Playing <span className="text-cyan-600 ">Palia</span></span>
                        </div>
                        <div className="bg-dark shadow-lg flex items-center space-x-5 fixed top-[125px] left-5 p-5 pr-[200px] hidden">
                            <img src="/imgs/Lynix_Mulli.png" alt="Lynix Cute" className="h-[75px] w-[75px] rounded-xl" />
                            <div>
                                <h2 className="text-2xl font-semibold">Unknown Song</h2>
                                <p className="text-gray-400 text-xl">Unknown Artist</p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <CyberImage src="/imgs/stickers/peeking.png" alt="Lynix Cute" containerClassName="h-[250px] w-[300px]" />
                        </div>
                        <div className="bg-gradient-to-r from-cyan-700 to-green-700 py-5 w-full animated-gradient">
                            <h1 className="text-3xl text-white font-cyber text-center w-full">
                                <span className="text-white text-6xl"><span className="text-white">STREAM ENDING</span><br />
                                    <span className="text-xl">See you next time!</span><br /></span>
                                <span className="text-4xl hidden">{timeLeft}</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}