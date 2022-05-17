import React from "react";
import rocketCoffeImage from "../../assets/rocket-coffee.png";
import leftBlurImage from "../../assets/blur-1.png";
import rightBlurImage from "../../assets/blur-2.png";
import style from "./style.module.scss";

export function ContentDesktop() {


	return (
		<>
			<div className={style.title}>
				<p>Great Coffe </p>
				<p className={style.greatCode}>&lsaquo;Great Code /&rsaquo;</p>
			</div>

			<img src={rocketCoffeImage} alt="copos de café da rocket" className={style.image} />x


			<img
				src={leftBlurImage}
				alt="imagem com efeito blur no canto esquerdo da tela"
				className={style.leftBlur}
			/>
			<img
				src={rightBlurImage}
				alt="imagem com efeito blur no canto direito da tela"
				className={style.rightBlur}
			/>
		</>
	);
}
