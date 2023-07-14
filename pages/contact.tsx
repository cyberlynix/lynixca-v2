import WebLayout from "@/components/layouts/WebLayout";
import Head from "next/head";

export default function Contact() {
    return (
        <>
            <Head>
                <title>LynixCA - Contact</title>
                <meta name="title" content="LynixCA"/>
                <meta name="description" content="Take a look at my pages to learn more about my background and achievements!"/>
                <meta name="keywords" content="cybersecurity, student, lynix, lynix.ca, furry, sysadmin, it, pentesting, devops"/>
                <meta name="robots" content="index, follow"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
            </Head>
            <WebLayout>
                <div className="min-h-screen px-10 py-10 font-cyber">
                    <h1 className="text-6xl">Contact Me</h1>
                    <p>
                        You can contact me via the following social medias or chat applications. You
                        may also aswell contact me via email.
                    </p>
                    <br />
                    <br />
                    <p>
                        <span className="text-green-700">Email:</span> lynix@lynix.ca
                    </p>
                    <p>
                        <span className="text-green-700">Discord:</span> lynix.ca
                    </p>
                    <p>
                        <span className="text-green-700">Twitter:</span> @cyberlynix
                    </p>
                    <p>
                        <span className="text-green-700">Telegram:</span> @cyberlynix
                    </p>
                </div>
            </WebLayout>
        </>
    )
}