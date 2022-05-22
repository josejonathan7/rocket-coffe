/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
	clearMocks: true,
	coverageProvider: "v8",
	roots: ["<rootDir>/src"],
	testEnvironment: "jest-environment-jsdom",
	transform: {
		"^.+\\.tsx?$": "ts-jest",
		".+\\.(css|scss|png|jpg|svg)$": "jest-transform-stub"
	},
	setupFilesAfterEnv: [
		"@testing-library/jest-dom/extend-expect"
	],
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	moduleNameMapper: {
		"^.+.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$": "jest-transform-stub"
	}
};
