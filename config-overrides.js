/**
 * 基于customize-cra和react-app-rewired 对create-react-app进行自定义配置
 */

const {
    override,
    addLessLoader,
    fixBabelImports,
    addDecoratorsLegacy
} = require('customize-cra')

const modifyVars = require('./theme')

module.exports = override(
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars
            //modifyVars: { "@primary-color": "#1DA57A" }
        }
    }),
    addDecoratorsLegacy(),
    fixBabelImports("import", {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true // change importing css to less
    }),
)