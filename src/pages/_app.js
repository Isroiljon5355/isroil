import { MantineProvider, ColorSchemeProvider } from "@mantine/core"
import { setCookies, getCookie } from "cookies-next"
import { useState } from "react"
import { useColorScheme } from "@mantine/hooks"
export default function App(props) {
	const { Component, pageProps } = props
	const getLayout = Component.getLayout || ((page) => page)
	const [colorScheme, setColorScheme] = useState(props.colorScheme)
	const toggleColorScheme = (value) => {
		const nextColorScheme = value || (colorScheme === "dark" ? "light" : "dark")
		setColorScheme(nextColorScheme)
		setCookies("mantine-color-scheme", nextColorScheme, {
			maxAge: 60 * 60 * 24 * 30,
		})
	}
	return getLayout(
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}
		>
			<MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
				<Component {...pageProps} />
			</MantineProvider>
		</ColorSchemeProvider>
	)
}
App.getInitialProps = ({ ctx }) => ({
	colorScheme: getCookie("mantine-color-scheme", ctx) || "n ",
})
