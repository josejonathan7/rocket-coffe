import React, { useEffect, useState } from "react";
import { HeaderDesktop, HeaderMobile, ContentDesktop, ContentMobile } from "./components";
import style from "./style.module.scss";


function App() {
	const [ theMenuIsOpenMobile, setTheMenuIsOpenMobile ] = useState(false);
	const [ screenWidth, setScreenWidth ] = useState(screen.width);

	useEffect(() => setScreenWidth(screen.width), [screen.width]);

	function handleMenusIsOpenMobile() {
		setTheMenuIsOpenMobile(!theMenuIsOpenMobile);
	}

	return (
		<div className={style.container}>

			{
				screenWidth <= 480 ?
					(
						<>
							<HeaderMobile
								onChangeMenuIsOpen={handleMenusIsOpenMobile}
								menuIsOpen={theMenuIsOpenMobile}
							/>

							{
								theMenuIsOpenMobile ? <></> : <ContentMobile />
							}
						</>
					)
					:
					(
						<>
							<HeaderDesktop />
							<ContentDesktop />
						</>
					)
			}






		</div>
	);
}

export default App;
