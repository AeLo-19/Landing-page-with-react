import React from "react";
import { NavBar } from "./navBar.js";
import {Jumbotron} from "./Jumbotron.js";
import {Footer} from "./Footer.js";
import {Cards} from "./cards.js"

export function Home() {
	return (
		<React.Fragment>
			<NavBar />
            <Jumbotron />
            <Cards />
            <Footer />
		</React.Fragment>
	);
}
