import '../styles/globals.css'
import { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta charSet='utf-8'></meta>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                name="viewport"
                content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                />
                <meta name="description" content="The App is a wallpaper from browser." />
                <meta name="keywords" content="wallpaper" />
                <title>Desk Cat</title>

                <link rel="manifest" href="/manifest.json" />
                <link
                href="/logo256.png"
                rel="icon"
                type="image/png"
                sizes="256x256"
                />
                <link
                href="/logo512.png"
                rel="icon"
                type="image/png"
                sizes="512x512"
                />
                <link rel="apple-touch-icon" href="/apple-icon.png"></link>
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta name="theme-color" content="#317EFB" />

            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp