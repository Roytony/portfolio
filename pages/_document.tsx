import {Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
    return (
        <Html>
            <Head>
            <meta name="twitter:card" content="Summary" />
            <meta name="twitter:site" content="@https://portfolio-chi-eight-57.vercel.app/" /> 
            <meta name="twitter:title" content="Arindam's portfolio" /> 
            <meta name="twitter:description" content="This is a portfolio website of Arindam Roy"/> 
            <meta name="twitter:image" content="https://media.graphassets.com/UdEP7CwOSN6zRrpIxgLe" />
            </Head>
           <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document