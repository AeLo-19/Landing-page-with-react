import React from "react";
import { NavBar } from "./navBar.js";
import {Jumbotron} from "./Jumbotron.js"

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
