import "../styles/globals.css"
import { MantineProvider, ColorSchemeProvider } from "@mantine/core"
import { setCookies } from "cookies-next"
import { useState } from "react"
export default function MyApp(props) {
	const { Component, pageProps } = props
	const [colorScheme, setColorScheme] = useState(props.colorScheme)
	const toggleColorScheme = (value) => {
		const nextColorScheme = value || (colorScheme === "dark" ? "light" : "dark")
		setColorScheme(nextColorScheme)
		setCookies("mantine-color-scheme", nextColorScheme, {
			maxAge: 60 * 60 * 24 * 30,
		})
	}
	return (
		<>
			<ColorSchemeProvider
				colorScheme={colorScheme}
				toggleColorScheme={toggleColorScheme}
			>
				<MantineProvider
					theme={{ colorScheme }}
					withGlobalStyles
					withNormalizeCSS
				>
					<Component {...pageProps} />
				</MantineProvider>
			</ColorSchemeProvider>
		</>
	)
}
// export default App
// MyApp.getInitialProps = (ctx) => {
// 	colorScheme: getCookies("mantine-color-scheme", ctx) || "n "
// }
