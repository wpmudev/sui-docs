declare module "*.svg" {
	import React = require("react")
	const svgType = React.FunctionComponent<React.SVGProps<SVGSVGElement>>
	export default svgType
}
