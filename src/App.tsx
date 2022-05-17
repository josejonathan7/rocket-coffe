import React from "react";
import { HeaderDesktop, HeaderMobile, ContentDesktop, ContentMobile } from "./components";
import style from "./style.module.scss";


function App() {

	return (
		<div className={style.container}>

			<HeaderMobile />

			<ContentMobile />


		</div>
	);
}

export default App;
