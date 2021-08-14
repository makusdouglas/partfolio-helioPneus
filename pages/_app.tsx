import React from "react"
import { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../global/globalStyles"
import { theme } from "../theme/theme"
import Header from "../components/Header"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header/>
            <Component {...pageProps} />

        </ThemeProvider>
    )
}
export default MyApp