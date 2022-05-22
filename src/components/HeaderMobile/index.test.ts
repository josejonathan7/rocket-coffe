import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HeaderMobile } from "./";

describe("#Test HeaderMobile component", () => {

	it("-> Should show button when menu are closed", () => {
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		const element = HeaderMobile({menuIsOpen: false, onChangeMenuIsOpen: () => {}});
		const { getByRole } = render(element);

		const buttonElement = getByRole("button");

		expect(buttonElement).not.toBeDisabled();
		expect(buttonElement.firstChild).toHaveAttribute("alt", "icone para abrir o menu hamburger");
		expect(buttonElement.firstChild).toHaveAttribute("src");
	});
});
