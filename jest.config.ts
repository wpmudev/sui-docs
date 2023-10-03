import type { Config } from "@jest/types"

const config: Config.InitialOptions = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.tsx?$": ["ts-jest", {}],
	},
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	testMatch: ["<rootDir>/packages/**/?(*.)test.{ts,tsx}"],
	setupFilesAfterEnv: ["<rootDir>/tests/setup-test.ts"],
	moduleNameMapper: {
		"^.+\\.svg$": "jest-svg-transformer",
	},
}

export default config
