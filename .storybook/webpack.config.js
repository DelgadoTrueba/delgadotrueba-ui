// module.exports = async ({ config, mode }) => {

//     config.module.rules.push({
//       test: /\.(png|jpg|jpeg)$/,
//       type: "asset/resource"
//     });
  
//     config.module.rules.push({
//       test: /\.(scss|sass)$/,
//       use: [
//         {
//           loader: require.resolve("style-loader"),
//           options: {
//             esModule: false,
//           },
//         },
//         {
//           loader: require.resolve("css-loader"),
//           options: {
//             importLoaders: 3,
//             sourceMap: true,
//             modules: {
//               localIdentName: "[name]__[local]___[hash:base64:5]",
//             },
//           },
//         },
//         {
//           loader: require.resolve("sass-loader"),
//           options: {
//             sourceMap: true,
//           },
//         },
//         {
//           loader: "sass-resources-loader",
//           options: {
//             resources: require("../src/styles/import.js"),
//           },
//         },
//       ],
//     });
    
//     config.resolve.plugins = [
//       new TsconfigPathsPlugin({ configFile: path.resolve(__dirname, '../tsconfig.json') })
//     ]

//    return config;
// };