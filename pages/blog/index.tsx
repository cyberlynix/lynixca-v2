import WebLayout from "@/components/layouts/WebLayout";
import Head from "next/head";

export default function BlogHome() {
    return (
        <>
            <Head>
                <title>LynixCA - Blog</title>
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
                        Blog
                    </h1>
                    <p className="mt-3">No articles are available at the moment. Come back soon :)</p>
                </div>
            </WebLayout>
        </>
    )
}