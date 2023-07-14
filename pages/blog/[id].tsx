import WebLayout from "@/components/layouts/WebLayout";
import Head from "next/head";

export default function BlogArticle() {
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
                <p>No Content.</p>
            </WebLayout>
        </>
    )
}