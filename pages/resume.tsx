import CyberImage from "@/components/CyberImage";
import WebLayout from "@/components/layouts/WebLayout";
import Head from "next/head";

export default function About() {
    return (
        <>
            <Head>
                <title>LynixCA - Resume</title>
                <meta name="title" content="LynixCA" />
                <meta name="description" content="Take a look at my pages to learn more about my background and achievements!" />
                <meta name="keywords" content="cybersecurity, student, lynix, lynix.ca, furry, sysadmin, it, pentesting, devops" />
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
            </Head>
            <WebLayout>
                <div className="px-4 py-1 inline-flex items-center w-full bg-gradient-to-r from-cyan-700 to-green-700 py-5 w-full animated-gradient">
                    <span className="text-white text-xl">Lynix is currently looking for work & interships in IT! <a href="https://lynix.ca/resume" className="hover:text-black hover:underline transition-colors"> Learn More</a></span>
                </div>
                <div className="p-6">
                    <h1 className="text-6xl font-cyber text-center">
                        <span className="text-cyan-600">Resume</span>
                    </h1>
                    <div className="flex justify-center mt-5">
                        <section className="p-6 md:w-1/2 w-full">
                            <CyberImage
                                alt="Lynix"
                                src="/ar.jpg"
                                containerClassName="h-32 w-32 float-right rotate-6 mr-5 ml-5 mb-5 border-2 border-gray-700 rounded-2xl float-animation" imageClassName="rounded-2xl"
                            />
                            <h1 className="text-6xl font-cyber">
                                Anthony Roy
                            </h1>
                            <p className="text-gray-300 text-lg font-cyber mt-3">
                                As a Cybersecurity student, I'm actively seeking opportunities to
                                enhance my knowledge and gain practical experience in the field.
                            </p>
                        </section>
                    </div>
                    <h1 className="text-6xl font-cyber text-center">
                        <span className="text-green-600">Contact Information</span>
                    </h1>
                    <p className="text-gray-300 text-lg font-cyber mt-3 text-center">
                        [503] FATAL: authentication failed
                    </p>
                    <h1 className="text-6xl font-cyber text-center mt-5">
                        <span className="text-cyan-600">References</span>
                    </h1>
                    <p className="text-gray-300 text-lg font-cyber mt-3 text-center">
                        [503] FATAL: authentication failed
                    </p>
                    <h1 className="text-6xl font-cyber text-center mt-5">
                        <span className="text-green-600">Work Experience</span>
                    </h1>
                    <p className="text-gray-300 text-lg font-cyber mt-3 text-center">
                        [503] FATAL: authentication failed
                    </p>
                    <h1 className="text-6xl font-cyber text-center mt-5">
                        <span className="text-cyan-600">Past Projects & Contributions</span>
                    </h1>
                    <div className="flex justify-center mt-5">
                        <div className="p-5 bg-dark rounded-2xl w-1/2">
                            <h1 className="text-3xl font-cyber text-center">
                                <span className="text-gray-400">DEFCON Furs 2023</span>
                            </h1>
                            <p className="text-gray-300 text-lg font-cyber mt-3 text-center">
                                Contributed & Maintained the DEFCON Furs Website for 2023 with the help of Alofoxx.
                            </p>
                            <div className="flex justify-center mt-5">
                                <a href="https://2023.dcfurs.com" className="auth-btn-2 flex items-center bg-cyan-600 font-semibold">
                                    <span>Visit Website</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-5">
                        <div className="p-5 bg-dark rounded-2xl w-1/2">
                            <h1 className="text-3xl font-cyber text-center">
                                <span className="text-gray-400">Server Deployment (CCNB)</span>
                            </h1>
                            <p className="text-gray-300 text-lg font-cyber mt-3 text-center">
                                Built from the ground up a network enviroment for students with 2 servers clustered with Proxmox.
                            </p>
                            <div className="flex justify-center mt-5">
                                <a href="#" className="auth-btn-2 flex items-center bg-cyan-600 font-semibold">
                                    <span>Learn More</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-5">
                        <div className="p-5 bg-dark rounded-2xl w-1/2">
                            <h1 className="text-3xl font-cyber text-center">
                                <span className="text-gray-400">Bloody ARK</span>
                            </h1>
                            <p className="text-gray-300 text-lg font-cyber mt-3 text-center">
                                Contributed & Maintained the Bloody ARK Website for 2 years.
                            </p>
                            <div className="flex justify-center mt-5">
                                <a href="https://bloody.gg" className="auth-btn-2 flex items-center bg-cyan-600 font-semibold">
                                    <span>Visit Website</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </WebLayout>
        </>
    )
}