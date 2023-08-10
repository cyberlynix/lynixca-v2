import WebLayout from "@/components/layouts/WebLayout";
import Image from 'next/image'
import CyberImage from "@/components/CyberImage";
import Head from "next/head";

export default function Fursona() {
    return (
        <>
            <Head>
                <title>LynixCA - Acheivements</title>
                <meta name="title" content="LynixCA - Fursona Digital Refsheet" />
                <meta name="description" content="Lynix is a unique character known as a Freakhound, a canine hybrid with reptilian traits on its tail. Hailing from deep space, Lynix possesses advanced technological knowledge and aids in protecting Earth against cyber attacks. With striking dual-colored eyes (green and blue) and glowing details that respond to its environment and behavior, Lynix is equipped with an embedded implant that enables survival in various conditions, including the ability to breathe in space without oxygen. Supported by the Freak Network, Lynix instantly gains intelligence and detects threats. Additionally, Lynix can simulate real-world events and technological scenarios. Apart from its technological expertise, Lynix also takes joy in piloting spacecrafts and planes." />
                <meta name="keywords" content="cybersecurity, student, lynix, lynix.ca, furry, sysadmin, it, pentesting, devops" />
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
            </Head>
            <WebLayout>
            <div className="px-4 py-1 inline-flex items-center w-full bg-gradient-to-r from-cyan-700 to-green-700 py-5 w-full animated-gradient">
                    <span className="text-white text-xl">Lynix is currently looking for work & interships in IT! <a href="https://lynix.ca/resume" className="hover:text-black hover:underline transition-colors"> Learn More</a></span>
                </div>
                <div className="min-h-screen px-10 py-10 font-cyber">
                    <div className="p-5">
                        <h1 className="text-6xl sm:text-5xl md:text-6xl mt-5">Badges</h1>
                        <p className="mt-3 text-base sm:text-lg md:text-xl">
                            Here's some of the badges I've earned during my journey in infosec
                        </p>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-5">
                            <div className="bg-dark p-5 rounded-2xl flex flex-col justify-center items-center">
                                <CyberImage src="/imgs/badges/isc2.png" alt="(ISC)² Candidate" containerClassName="h-[300px] w-[300px]" imageClassName="rounded-2xl" />
                                <h1 className="mt-5 text-center font-bold flex space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                    </svg>
                                    <span>(ISC)² Candidate</span>
                                </h1>
                                <div className="flex justify-center mt-5">
                                    <a href="https://www.credly.com/badges/8a7cd5ed-636d-4191-9940-9d946ef3fa0e" className="auth-btn-2 flex items-center bg-cyan-600 font-semibold">
                                        <span>Verify Credential</span>
                                    </a>
                                </div>
                            </div>
                            <div className="bg-dark p-5 rounded-2xl flex flex-col justify-center items-center">
                                <CyberImage src="/imgs/badges/cips2.webp" alt="(ISC)² Candidate" containerClassName="h-[300px] w-[300px]" imageClassName="rounded-2xl" />
                                <h1 className="mt-5 text-center font-bold flex space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                    </svg>
                                    <span>CIPS Membership</span>
                                </h1>
                                <div className="flex justify-center mt-5">
                                    <a href="https://www.credential.net/b5b28d2e-94ca-48d4-9630-3ca033d68732#gs.485ji3" className="auth-btn-2 flex items-center bg-cyan-600 font-semibold">
                                        <span>Verify Credential</span>
                                    </a>
                                </div>
                            </div>
                            <div className="bg-dark p-5 rounded-2xl flex flex-col justify-center items-center">
                                <CyberImage src="/imgs/badges/cisco-netbasics.png" alt="Cisco - Networking Basics" containerClassName="h-[300px] w-[300px]" imageClassName="rounded-2xl" />
                                <h1 className="mt-5 text-center font-bold flex space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                    </svg>
                                    <span>Cisco - Networking Basics</span>
                                </h1>
                                <div className="flex justify-center mt-5">
                                    <a href="https://www.credly.com/badges/8b39347f-103c-49f6-9d9a-982c36169e85" className="auth-btn-2 flex items-center bg-cyan-600 font-semibold">
                                        <span>Verify Credential</span>
                                    </a>
                                </div>
                            </div>
                            <div className="bg-dark p-5 rounded-2xl flex flex-col justify-center items-center">
                                <CyberImage src="/imgs/badges/dcflogo-black.svg" alt="Cisco - Networking Basics" containerClassName="h-[300px] w-[300px]" imageClassName="rounded-2xl" />
                                <h1 className="mt-5 text-center font-bold flex space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-cyan-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                                    </svg>
                                    <span>DEFCON Furs 2023 - Vixy</span>
                                </h1>
                            </div>
                            <div className="bg-dark p-5 rounded-2xl flex flex-col justify-center items-center">
                                <CyberImage src="/imgs/Lynix_Mulli.png" alt="Cisco - Networking Basics" containerClassName="h-[300px] w-[300px]" imageClassName="rounded-2xl" />
                                <h1 className="mt-5 text-center font-bold flex space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-cyan-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                                    </svg>
                                    <span>Lynix Meetup Badge</span>
                                </h1>
                            </div>
                        </div>
                        <h1 className="text-6xl sm:text-5xl md:text-6xl mt-5">Certifications</h1>
                        <p className="mt-3 text-base sm:text-lg md:text-xl">
                            Here's are some certifications I've completed.
                        </p>

                        <br />
                        <p className="mt-3 text-base sm:text-lg md:text-xl text-gray-400">
                            No Certifications Completed.
                        </p>
                    </div>
                </div>
            </WebLayout>
        </>
    )
}