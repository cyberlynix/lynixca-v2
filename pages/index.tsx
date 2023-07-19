import WebLayout from "@/components/layouts/WebLayout";
import CyberImage from "@/components/CyberImage";
import Head from 'next/head'
import {useEffect} from "react";

export default function Home() {
  return (
    <main>
        <Head>
            <title>LynixCA - Home</title>
            <meta name="title" content="LynixCA"/>
            <meta name="description" content="Take a look at my pages to learn more about my background and achievements!"/>
            <meta name="keywords" content="cybersecurity, student, lynix, lynix.ca, furry, sysadmin, it, pentesting, devops"/>
            <meta name="robots" content="index, follow"/>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
            <meta name="language" content="English"/>
        </Head>
        <WebLayout>
          <div
              className="bg-emerald-600 font-cyber text-2xl text-black py-1 px-3 hidden"
          >
              Welcome to lynix.ca my personal website! Thanks for scanning my badge!
          </div>
          <div className="relative">
              <div className="flex items-center h-full justify-center bg-black bg-opacity-60 absolute z-20 w-full">
                  <div className="max-w-3xl mx-auto text-center">
                      <h1 className="mb-4 text-3xl text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                          WELCOME TO{" "}
                          <span className="text-cyan-700 px-3">LYNIX<span className="text-green-600">.CA</span></span>
                      </h1>
                      <p className="text-2xl text-gray-500 dark:text-white">
                          Nice to meet you! Take a look at my pages to learn more about my
                          background and achievements.
                          <br /> I'm currently pursuing a career in information security.
                      </p>
                  </div>
              </div>
              <CyberImage src="/bg.png" alt="Background Image" containerClassName="bg-blue-900 font-cyber h-[600px]" priority={true}/>
          </div>
          {/* Container */}
          <div className="flex flex-col items-center py-20">
              {/* Content */}
              <section className="p-6 md:w-1/2 w-full">
                  <CyberImage
                      alt="Lynix"
                      src="/imgs/Lynix_Mulli.png"
                      containerClassName="h-32 w-32 float-right rotate-6 mr-5 ml-5 mb-5 border-2 border-gray-700 rounded-2xl float-animation" imageClassName="rounded-2xl"
                  />
                  <h1 className="text-6xl font-cyber">
                      👋 Hello <span className="text-green-700">There</span>!
                  </h1>
                  <p className="text-gray-300 text-lg font-cyber mt-3">
                      As a Cybersecurity student, I'm actively seeking opportunities to
                      enhance my knowledge and gain practical experience in the field. In
                      addition to my studies, I have a passion for artistic expression and
                      enjoy drawing in my free time. Playing video games is another interest
                      of mine, which allows me to unwind and explore different virtual worlds.
                      I'm proudly based in Canada, as indicated by my domain name being a .ca.
                  </p>
              </section>
              <section className="p-6 md:w-1/2 w-full">
                  <CyberImage
                      alt="Background"
                      src="/bg.png"
                      containerClassName="w-[300px] h-[200px] float-left -rotate-6 mb-4 mr-6"
                      imageClassName="rounded-2xl"
                  />
                  <h1 className="text-6xl font-cyber">
                      <span className="text-cyan-700">About</span> Me
                  </h1>
                  <p className="text-gray-300 text-lg font-cyber mt-3">
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
              </section>
              <section className="p-6 md:w-1/2 w-full">
                  <h1 className="text-6xl font-cyber">
                      Why <span className="text-green-700">Cybersecurity</span>?
                  </h1>
                  <p className="text-gray-300 text-lg font-cyber  mt-3">
                      In a constantly advancing technological world, ensuring the safety and
                      security of our data has become increasingly crucial. I am passionate
                      about contributing to the efforts that protect our valuable information.
                      Each day, we come across news about cybersecurity exploits being
                      discovered, and I aspire to be part of the community that proactively
                      prevents such incidents. This is particularly critical for businesses,
                      organizations, and individuals who rely on robust mitigation processes
                      to safeguard their systems.
                  </p>
                  <br />
                  <br />
                  <p className="text-gray-300 text-lg font-cyber">
                      For instance, as the owner of lynix.ca, I understand the importance of
                      regularly updating and patching my website to fend off daily attacks.
                  </p>
              </section>
          </div>
        </WebLayout>
    </main>
  )
}
