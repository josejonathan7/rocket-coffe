import React from "react";
import rocketMobileLogoImage from "../../assets/logo-mobile.svg";
import menuBuguerOpenImage from "../../assets/menu-buguer-open.svg";
import menuBuguerCloseImage from "../../assets/menu-buguer-close.svg";
import style from "./style.module.scss";

const menuContents = ["Home", "Menu", "Recompensas", "Gift Cards", "Lojas"];

interface Props {
	onChangeMenuIsOpen: () => void;
	menuIsOpen: boolean;
}

export function HeaderMobile ({ onChangeMenuIsOpen, menuIsOpen }: Props) {


	return (
		<header className={style.container}>

			<div className={style.closedMenu}>

				<img src={rocketMobileLogoImage} alt="logo da rocketseat" />

				{
					menuIsOpen ?
						<button onClick={() => onChangeMenuIsOpen()}>
							<img src={menuBuguerCloseImage} alt="icone para fechar o menu" />
						</button>

						:
						<button onClick={() => onChangeMenuIsOpen()}>
							<img src={menuBuguerOpenImage} alt="icone de menu hamburger" />
						</button>

				}



			</div>

			<hr className={style.hrLine} />

			{
				menuIsOpen ?
					<ul className={style.ulList}>
						{
							menuContents.map((item, index) => (
								<li key={index}>
									{item}
								</li>
							))
						}
					</ul>
					:
					<></>
			}
		</header>
	);
}
