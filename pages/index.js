import Head from "next/head";
import {Inter} from "next/font/google";
import Index from "@/pages/home";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    return (
        <>
            <Head>
                <title>GeekLab - Learn Programming, Interior Design, and AutoCAD</title>
                <meta name="description" content="GeekLab offers high-quality programming languages lessons, interior design education lessons, and AutoCAD tutorials. Start learning today!" />
                <meta name="keywords" content="GeekLab, programming languages, interior design, AutoCAD, tutorials, lessons, learn programming, learn interior design, learn AutoCAD" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Your Name or GeekLab Team" />
                <link rel="canonical" href="https://www.geeklab.am/" />
                <meta property="og:title" content="GeekLab - Learn Programming, Interior Design, and AutoCAD" />
                <meta property="og:description" content="GeekLab offers high-quality programming languages lessons, interior design education lessons, and AutoCAD tutorials. Start learning today!" />
                <meta property="og:image" content="https://www.geeklab.am/logo.PNG" />
                <meta property="og:url" content="https://www.geeklab.am/" />
                <meta property="og:type" content="website" />
            </Head>
            <Index/>

        </>
    );
}
