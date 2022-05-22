import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HeaderDesktop } from ".";

describe("#Test HeaderDesktop component", () => {

	it("-> Should show button in screen", () => {
		const element = HeaderDesktop();
		const { getAllByRole } = render(element);
		const buttonElements = getAllByRole("button");

		buttonElements.forEach(value => {

			expect(value).not.toBeEmptyDOMElement();
			expect(value).toHaveAttribute("title");
		});
	});

	it("-> Should check the properties of the image tag", () => {
		const element = HeaderDesktop();
		const { getByRole } = render(element);
		const imageElement = getByRole("img");

		expect(imageElement).toHaveAttribute("src");
		expect(imageElement).toHaveAttribute("alt", "logo da rocket");
	});



});
