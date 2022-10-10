import React from "react"
import AppShellDemo from "../../components/navbar/Navbar"
function About() {
	return <div>about</div>
}

export default About
Contact.getLayout = (page) => <AppShellDemo>{page}</AppShellDemo>
