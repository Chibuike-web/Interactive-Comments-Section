/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.html"],
	theme: {
		screens: {
			xl: { max: "1440px" }, // Styles apply from 1440px and down
			lg: { max: "976px" }, // Styles apply from 976px and down
			md: { max: "768px" }, // Styles apply from 768px and down
			sm: { max: "480px" }, // Styles apply from 480px and down
		},
		extend: {
			colors: {
				moderateBlue: "hsl(238, 40%, 52%)",
				softRed: "hsl(358, 79%, 66%)",
				lightGrayishBlue: "hsl(239, 57%, 85%)",
				paleRed: "hsl(357, 100%, 86%)",

				darkBlue: "hsl(212, 24%, 26%)",
				grayishBlue: "hsl(211, 10%, 45%)",
				lightGray: "hsl(223, 19%, 93%)",
				veryLightGray: "hsl(228, 33%, 97%)",
				white: "hsl(0, 0%, 100%)",
			},
		},
		variants: {
			fill: ["hover", "focus"], // this line does the trick
		},
	},
	plugins: [require("tailwindcss"), require("autoprefixer")],
};
