import React from "react";
import bottomBlurImage from "../../assets/blur-mobile.png";
import rocketCoffeImage from "../../assets/rocket-coffee.png";
import style from "./style.module.scss";

export function ContentMobile () {


	return (
		<main className={style.container}>
			<h1>
				O café que fará seu código decolar para o próximo nivel.
			</h1>


			<button className={style.button}>
				PEGAR MEU CAFÉ &rsaquo;
			</button>


			<div className={style.title}>
				<p>Great Coffe </p>
				<p className={style.greatCode}>&lsaquo;Great Code /&rsaquo;</p>
			</div>


			<img
				src={rocketCoffeImage}
				alt="copos de café da rocketseat"
				className={style.coffeImage}
			/>

			<img
				src={bottomBlurImage}
				alt="imagem com efeito blur no canto de baixo da tela"
				className={style.bottomBlur}
			/>
		</main>
	);
}
