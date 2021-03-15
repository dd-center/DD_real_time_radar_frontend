// const CompressionPlugin = require("compression-webpack-plugin");
// // // module.exports = {
// // //   productionSourceMap: false,
// // //   configureWebpack:config=>{
// // //     if(process.env.NODE_ENV === 'production')
// // //     {
// // //       return {
// // //         plugins:[new CompressionPlugin({
// // //           test: /\.js(\?.*)?$|.css(\?.*)?$/i,
// // //           deleteOriginalAssets: false,
// // //         })]
// // //       }
// // //     }
// // //   }
// // // }
// module.export = {
//   configureWebpack: () => {
//      if (process.env.NODE_ENV === 'production') {
//       return {
//         plugins: [
//           new CompressionPlugin({
//             test: /\.js$|\.html$|\.css$|\.jpg$|\.jpeg$|\.png/, // 需要压缩的文件类型
//             threshold: 10240, // 归档需要进行压缩的文件大小最小值，我这个是10K以上的进行压缩
//             deleteOriginalAssets: false // 是否删除原文件
//           })
//         ]
//       }
//     }
//   }
// }
//
// Add this line:
const CompressionPlugin = require('compression-webpack-plugin');
module.exports = {
  chainWebpack(config) {
    config.plugins.delete('prefetch');

    // and this line
    config.plugin('CompressionPlugin').use(CompressionPlugin);
  }
};
