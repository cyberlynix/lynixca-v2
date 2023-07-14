import WebLayout from "@/components/layouts/WebLayout";
import Head from "next/head";

export default function About() {
    return (
        <>
            <Head>
                <title>LynixCA - About</title>
                <meta name="title" content="LynixCA"/>
                <meta name="description" content="Take a look at my pages to learn more about my background and achievements!"/>
                <meta name="keywords" content="cybersecurity, student, lynix, lynix.ca, furry, sysadmin, it, pentesting, devops"/>
                <meta name="robots" content="index, follow"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
            </Head>
            <WebLayout>
                <div className="p-6">
                    <h1 className="text-6xl font-cyber">
                        <span className="text-green-700">About</span> Me
                    </h1>
                    <p className="text-gray-300 text-lg font-cyber mt-3 w-4/5">
                        I began my journey in IT back in 2013, where I started by learning basic
                        HTML and C++ from university books. Since then, I've relied on resources
                        like Google and YouTube to expand my knowledge and learn new programming
                        languages. In 2022, I transitioned into the fields of System
                        Administration and Cybersecurity, which have been incredibly enriching
                        experiences. I've been constantly learning and I'm eager to continue
                        growing in these areas. Currently, I'm in my second year of studying
                        Cybersecurity in college. Aside from my IT pursuits, I also find
                        enjoyment in VR gaming, and I proudly identify as a full-time furry.
                    </p>

                    <h1 className="text-6xl font-cyber mt-5">
                        Why <span className="text-green-700">Cybersecurity</span>?
                    </h1>
                    <p className="text-gray-300 text-lg font-cyber mt-3  w-4/5">
                        In a constantly advancing technological world, ensuring the safety and
                        security of our data has become increasingly crucial. I am passionate
                        about contributing to the efforts that protect our valuable information.
                        Each day, we come across news about cybersecurity exploits being
                        discovered, and I aspire to be part of the community that proactively
                        prevents such incidents. This is particularly critical for businesses,
                        organizations, and individuals who rely on robust mitigation processes
                        to safeguard their systems.
                    </p>
                </div>
            </WebLayout>
        </>
    )
}