import React from "react";
import style from "./style.module.scss";
import rocketLogo from "../../assets/logo-desktop.svg";


const menuContents = ["Home", "Menu", "Recompensas", "Gift Cards", "Lojas"];

export function HeaderDesktop () {

	return (
		<header className={style.container}>

			<img src={rocketLogo} alt="logo da rocket" />

			<nav className={style.nav}>
				{
					menuContents.map((text, index) => (
						<button key={index} title={`ir para a página ${text}`}>
							{text}
						</button>
					))
				}
			</nav>

			<button className={style.button} title="não tem funcionalidade">
				PEGAR MEU CAFÉ
			</button>

		</header>
	);
}
