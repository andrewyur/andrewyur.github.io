/*eslint no-undef: 0*/
module.exports = {
	watch: true,
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: "file-loader",
					},
				],
			},
		],
	},
};
