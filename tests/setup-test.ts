import "@testing-library/jest-dom"

import { TextEncoder, TextDecoder } from "util"
global.TextEncoder = TextEncoder
// @ts-expect-error
global.TextDecoder = TextDecoder

global.ResizeObserver = jest.fn().mockImplementation(() => ({
	observe: jest.fn(),
	unobserve: jest.fn(),
	disconnect: jest.fn(),
}))