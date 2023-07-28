import WebLayout from "@/components/layouts/WebLayout";
import Image from 'next/image'
import CyberImage from "@/components/CyberImage";
import Head from "next/head";

export default function Fursona() {
    return (
        <>
            <Head>
                <title>LynixCA - Fursona</title>
                <meta name="title" content="LynixCA - Fursona Digital Refsheet" />
                <meta name="description" content="Lynix is a unique character known as a Freakhound, a canine hybrid with reptilian traits on its tail. Hailing from deep space, Lynix possesses advanced technological knowledge and aids in protecting Earth against cyber attacks. With striking dual-colored eyes (green and blue) and glowing details that respond to its environment and behavior, Lynix is equipped with an embedded implant that enables survival in various conditions, including the ability to breathe in space without oxygen. Supported by the Freak Network, Lynix instantly gains intelligence and detects threats. Additionally, Lynix can simulate real-world events and technological scenarios. Apart from its technological expertise, Lynix also takes joy in piloting spacecrafts and planes." />
                <meta name="keywords" content="cybersecurity, student, lynix, lynix.ca, furry, sysadmin, it, pentesting, devops" />
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
            </Head>
            <WebLayout>
                <div className="min-h-screen px-10 py-10 font-cyber">
                    <div className="mt-3 px-4 py-1 rounded-full bg-dark inline-flex items-center mx-2 sm:mx-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-cyan-500 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                        </svg>
                        <span className="text-cyan-500">Lynix is currently looking for commissions for Ref Sheets! Contact Lynix for more details!</span>
                    </div>
                    <div className="flex flex-wrap mt-3">
                        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-5">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl ">My Fursona</h1>
                            <p className="mt-3 text-base sm:text-md">
                                <span className="text-cyan-500 text-md">What's a fursona?</span> A fursona
                                is a customized animal character representing someone in the furry fandom,
                                ranging from anthropomorphic personas to roleplay characters or digital
                                mascots.
                            </p>
                            <p className="text-base sm:text-md mt-2">
                                <span className="text-cyan-500 text-md">What's a furry?</span> A furry is
                                someone who is a fan or enthusiast of characters that depict animals with
                                human characteristics, such as talking, walking on two legs, and displaying
                                human-like emotions and behaviors.
                            </p>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl mt-5">About Lynix</h1>
                            <p className="mt-3 text-base sm:text-lg">
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
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-2/3 xl:w-2/3 p-5">
                            <div className="w-full h-[500px] bg-dark mt-5 rounded-2xl flex justify-center items-center text-center text-2xl">
                                <p>
                                    Reference Sheet Unavailable
                                    <br />
                                    <span className="text-cyan-500">LYNIX_NOT_FOUND</span>
                                </p>
                            </div>
                            <div className="mt-3 px-4 py-1 rounded-full bg-dark inline-block">
                                Reference Sheet by <span className="text-green-500">Unknown</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-5">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl mt-5">Color References</h1>
                        <p className="mt-3 text-base sm:text-lg">
                            These colors serve as guiding elements for artists and brand designers, ensuring the most optimal design alignment for Lynix while maintaining a consistent and cohesive visual identity.
                            <br /><br />
                            General Colors:
                        </p>
                        <div className="flex flex-wrap gap-4 mt-3">
                            <div className="h-12 w-12 sm:h-16 sm:w-16 bg-cyan-500 border-2 border-gray-700"></div>
                            <div className="h-12 w-12 sm:h-16 sm:w-16 bg-green-500 border-2 border-gray-700"></div>
                            <div className="h-12 w-12 sm:h-16 sm:w-16 bg-white border-2 border-gray-700"></div>
                            <div className="h-12 w-12 sm:h-16 sm:w-16 bg-darker border-2 border-gray-700"></div>
                        </div>
                        <p className="mt-3 text-base sm:text-lg">
                            Eye Color:
                        </p>
                        <div className="flex flex-wrap gap-4 mt-3">
                            <div className="h-12 w-12 sm:h-16 sm:w-16 bg-cyan-500 border-2 border-gray-700"></div>
                            <div className="h-12 w-12 sm:h-16 sm:w-16 bg-green-500 border-2 border-gray-700"></div>
                        </div>
                        <p className="mt-3 text-base sm:text-lg">
                            Website Branding Colors:
                        </p>
                        <div className="flex flex-wrap gap-4 mt-3">
                            <div className="h-12 w-12 sm:h-16 sm:w-16 bg-dark border-2 border-gray-700"></div>
                            <div className="h-12 w-12 sm:h-16 sm:w-16 bg-darker border-2 border-gray-700"></div>
                            <div className="h-12 w-12 sm:h-16 sm:w-16 bg-green-600 border-2 border-gray-700"></div>
                            <div className="h-12 w-12 sm:h-16 sm:w-16 bg-cyan-700 border-2 border-gray-700"></div>
                        </div>
                        <h1 className="text-6xl mt-5">Artwork</h1>
                        <p className="mt-3 text-base sm:text-lg">
                            Dive into a captivating collection of artwork featuring Lynix, my furry character.
                            From digital masterpieces to playful doodles, witness the creativity and passion of the furry fandom.
                            Join the vibrant world of furries and explore Lynix's thrilling adventures through art!
                        </p>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-3">
                            <div className="bg-dark p-5 rounded-2xl">
                                <div className="flex justify-center">
                                    <CyberImage src="/imgs/lynixrender-fixed.png" alt="Lynix" containerClassName="h-[300px] w-[150px]" imageClassName="rounded-2xl" />
                                </div>
                                <h1 className="mt-5 text-center font-bold">Artwork by Lynix</h1>
                            </div>
                            <div className="bg-dark p-5 rounded-2xl">
                                <div className="flex justify-center">
                                    <CyberImage src="/imgs/logo-fixed.png" alt="Lynix" containerClassName="h-[300px] w-[300px]" imageClassName="rounded-2xl" />
                                </div>
                                <h1 className="mt-5 text-center font-bold">Artwork by Lynix</h1>
                            </div>
                            <div className="bg-dark p-5 rounded-2xl">
                                <div className="flex justify-center">
                                    <CyberImage src="/imgs/LynixDoodle.png" alt="Lynix" containerClassName="h-[300px] w-[300px]" imageClassName="rounded-2xl" />
                                </div>
                                <h1 className="mt-5 text-center font-bold">Artwork by KookieeKrafts</h1>
                            </div>
                            <div className="bg-dark p-5 rounded-2xl">
                                <div className="flex justify-center">
                                    <CyberImage src="/imgs/Lynix_Mulli.png" alt="Lynix" containerClassName="h-[300px] w-[300px]" imageClassName="rounded-2xl" />
                                </div>
                                <h1 className="mt-5 text-center font-bold">Artwork by Mulliganos</h1>
                            </div>
                        </div>
                        <h1 className="text-6xl sm:text-5xl md:text-6xl mt-5">Stickers</h1>
                        <p className="mt-3 text-base sm:text-lg md:text-xl">
                            In this collection, you'll find a variety of stickers designed for different purposes.
                            From fun and expressive Telegram stickers to high-quality printable stickers to use at conventions,
                            there's something for everyone to enjoy and share with fellow furries!
                        </p>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-5">
                            <div className="bg-dark p-5 rounded-2xl flex flex-col justify-center items-center">
                                <CyberImage src="/imgs/stickers/peeking.png" alt="Lynix" containerClassName="h-[300px] w-[300px]" imageClassName="rounded-2xl" />
                                <h1 className="mt-5 text-center font-bold">Lynix Peeking</h1>
                            </div>
                            <div className="bg-dark p-5 rounded-2xl flex flex-col justify-center items-center">
                                <div className="h-[300px] w-[300px] rounded-2xl bg-darker" />
                                <div className="flex justify-center animate-pulse">
                                    <div className="h-4 w-[200px] bg-darker rounded-full col-span-2 mt-5"></div>
                                </div>
                            </div>
                            <div className="bg-dark p-5 rounded-2xl flex flex-col justify-center items-center">
                                <div className="h-[300px] w-[300px] rounded-2xl bg-darker" />
                                <div className="flex justify-center animate-pulse">
                                    <div className="h-4 w-[200px] bg-darker rounded-full col-span-2 mt-5"></div>
                                </div>
                            </div>
                            <div className="bg-dark p-5 rounded-2xl flex flex-col justify-center items-center">
                                <div className="h-[300px] w-[300px] rounded-2xl bg-darker" />
                                <div className="flex justify-center animate-pulse">
                                    <div className="h-4 w-[200px] bg-darker rounded-full col-span-2 mt-5"></div>
                                </div>
                            </div>
                        </div>
                        <h1 className="text-6xl sm:text-5xl md:text-6xl mt-5">Alternate Furonas</h1>
                        <p className="mt-3 text-base sm:text-lg md:text-xl">
                            These are my alternate fursonas that I've explored during my journey as a furry. While they are not my primary fursonas, I have enjoyed embodying these unique species from time to time.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5">
                            <div className="bg-dark shadow-lg rounded-xl p-6 flex flex-col items-center sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
                                <CyberImage src="/imgs/linix.png" alt="Linix" containerClassName="h-[250px] w-[250px]" imageClassName="rounded-2xl" />
                                <div>
                                    <h1 className="text-3xl font-bold">Linix</h1>
                                    <p className="text-lg">Species: Lynx</p>
                                    <p className="text-lg">First Appeared: May 2022</p>
                                    <div className="py-4">
                                        <button className="auth-btn-2 h-full flex items-center bg-cyan-600 font-semibold">
                                            <span>View Character</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-dark shadow-lg rounded-xl p-6 flex flex-col items-center sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
                                <CyberImage src="/imgs/lunix.png" alt="Linix" containerClassName="h-[250px] w-[250px]" imageClassName="rounded-2xl" />
                                <div>
                                    <h1 className="text-3xl font-bold">Lunix</h1>
                                    <p className="text-lg">Species: Wolf</p>
                                    <p className="text-lg">First Appeared: June 2021</p>
                                    <div className="py-4">
                                        <button className="auth-btn-2 h-full flex items-center bg-cyan-600 font-semibold">
                                            <span>View Character</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </WebLayout>
        </>
    )
}