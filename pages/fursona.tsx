import WebLayout from "@/components/layouts/WebLayout";
import Image from 'next/image'
import CyberImage from "@/components/CyberImage";
import Head from "next/head";

export default function Fursona() {
    return (
        <>
            <Head>
                <title>LynixCA - Fursona</title>
                <meta name="title" content="LynixCA"/>
                <meta name="description" content="Take a look at my pages to learn more about my background and achievements!"/>
                <meta name="keywords" content="cybersecurity, student, lynix, lynix.ca, furry, sysadmin, it, pentesting, devops"/>
                <meta name="robots" content="index, follow"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
            </Head>
            <WebLayout>
                <div className="min-h-screen px-10 py-10 font-cyber">
                    <h1 className="text-6xl">My Fursona</h1>
                    <p className="mt-3">
                        <span className="text-green-700 text-xl">What's a fursona?</span> A fursona
                        is a customized animal character representing someone in the furry fandom,
                        ranging from anthropomorphic personas to roleplay characters or digital
                        mascots.
                    </p>
                    <p>
                        <span className="text-green-700 text-xl">What's a furry?</span> A furry is
                        someone who is a fan or enthusiast of characters that depict animals with
                        human characteristics, such as talking, walking on two legs, and displaying
                        human-like emotions and behaviors.
                    </p>
                    <h1 className="text-6xl mt-5">About Lynix </h1>
                    <p className="mt-3">
                        Lynix is a unique character known as a Freakhound, a canine hybrid with
                        reptilian traits on its tail. Hailing from deep space, Lynix possesses
                        advanced technological knowledge and aids in protecting Earth against cyber
                        attacks. With striking dual-colored eyes (green and blue) and glowing
                        details that respond to its environment and behavior, Lynix is equipped with
                        an embedded implant that enables survival in various conditions, including
                        the ability to breathe in space without oxygen. Supported by the Freak
                        Network, Lynix instantly gains intelligence and detects threats.
                        Additionally, Lynix can simulate real-world events and technological
                        scenarios. Apart from its technological expertise, Lynix also takes joy in
                        piloting spacecrafts and planes.
                    </p>
                    <div className="w-1/2 h-96 bg-card mt-5 rounded-2xl flex justify-center items-center text-center">
                        <p>
                            Reference Sheet Unavailable
                            <br />
                            Error Code: LYNIX_NOT_CONNECTED
                        </p>
                    </div>
                    <h1 className="text-6xl mt-5">Artwork </h1>
                    <div className="flex space-x-4 mt-3">
                        <CyberImage src="/logo.png" alt="Lynix" containerClassName="h-[300px] w-[200px]" imageClassName="rounded-2xl" />
                        <CyberImage src="/imgs/lynix.png" alt="Lynix" containerClassName="h-[300px] w-[200px]" imageClassName="rounded-2xl" />
                        <CyberImage src="/imgs/LynixDoodle.png" alt="Lynix" containerClassName="h-[300px] w-[200px]" imageClassName="rounded-2xl" />
                    </div>
                    <h1 className="text-6xl mt-5">Stickers </h1>
                    <p className="text-red-600 mt-3">[404] No Stickers Found!</p>
                    <h1 className="text-6xl mt-5">Other Characters </h1>
                    <p className="mt-3">They're mainly unused but may appear in some lore</p>
                    <div className="flex space-x-4">
                        <div className="w-1/2 bg-card mt-5 rounded-2xl flex space-x-8">
                            <CyberImage src="/imgs/linix.png" alt="Linix" containerClassName="h-[250px] w-[250px]" imageClassName="rounded-2xl" />
                            <div>
                                <h1 className="text-6xl mt-5">Linix</h1>
                                <p>Species: Lynx</p>
                                <p>First Appeared: May 2022</p>
                            </div>
                        </div>
                        <div className="w-1/2 bg-card mt-5 rounded-2xl flex space-x-8">
                            <CyberImage src="/imgs/lunix.png" alt="Linix" containerClassName="h-[250px] w-[250px]" imageClassName="rounded-2xl" />
                            <div>
                                <h1 className="text-6xl mt-5">Lunix</h1>
                                <p>Species: Wolf</p>
                                <p>First Appeared: June 2021</p>
                            </div>
                        </div>
                    </div>
                </div>
            </WebLayout>
        </>
    )
}