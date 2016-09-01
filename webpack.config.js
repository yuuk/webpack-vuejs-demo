var path = require('path'),
	webpack = require('webpack'),
	HtmlwebpackPlugin = require('html-webpack-plugin'),
	ExtractTextPlugin = require("extract-text-webpack-plugin");

var ROOT_PATH = path.resolve(__dirname),
	SRC_PATH = path.resolve(ROOT_PATH,'src'),
	DIST_PATH = path.resolve(ROOT_PATH,'dist');


console.log(ROOT_PATH,SRC_PATH,DIST_PATH);

module.exports = {
	entry : path.join(SRC_PATH,'entry.js'),
	output : {
		path : DIST_PATH,
		filename : "./js/bundle.js?v=[hash]"
	},
	module : {
		loaders: [
			//内联样式抽取成css文件
			{test: /\.css$/,loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
			//编译less文件
			{test: /\.less$/,loader: ExtractTextPlugin.extract('style', 'css!less')},
			//处理json文件
			{ test: /\.json$/, loader: "json" },
			//转化ES6语法
			{test: /\.(js|jsx)$/, loader: 'babel-loader'},
			//解析.vue文件
			{test: /\.vue$/, loader: 'vue'},
			//图片转化，小于8K自动转化为base64的编码
			{test: /\.(png|jpg)$/, loader: 'url?limit=8192'}
	    ]
    },
    vue:{
    	loaders : {
    		js : 'babel',
    		css:ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap")
    	}
    },
	plugins : [
		//提取css到common.css里
		new ExtractTextPlugin("./css/common.css?v=[hash]",{allChunks: true}),
		//HTML
		new HtmlwebpackPlugin({
			title : 'Webpack Demo',
			template: path.join(SRC_PATH,'index.html'),
    		inject: 'body'
		}),
		//压缩打包的文件
	    new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			minimize : true
	    })			
	],
	//创建服务器
	devServer: {
	    historyApiFallback: true,
	    hot: true,
	    inline: true,
	    progress: true,
  	},
  	resolve: {
        //别名配置，配置之后，可以在别的js文件中直接使用require('moudle')
        alias: {
        	//'sub': path.join(SRC_PATH,'js/sub.js')
        },
        //require时省略的扩展名，如:require('app') 不需要app.js
        extensions: ['', '.js', '.json', '.vue']
    },　　
  	devtool: 'source-map'
};