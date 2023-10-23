import React from "react"
import { render } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"

expect.extend(toHaveNoViolations)

// use this for testing a11y
export const suiA11yTest = async (ui: React.ReactElement) => {
	// check if a11y testing is enabled via environment variable
	if (process.env.SUI_A11Y_TEST) {
		const { container } = render(ui)
		const results = await axe(container)
		expect(results).toHaveNoViolations()
	}
}
