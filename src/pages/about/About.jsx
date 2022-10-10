import React from "react"
import Layouts from "../../layouts/Layouts"
function About() {
	return <div>about</div>
}

export default About
About.getLayout = function getLayout(page) {
	return <Layouts>{page}</Layouts>
}
// Contact.getLayout = (page) => <AppShellDemo>{page}</AppShellDemo>
