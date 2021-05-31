/*
 * @Author: your name
 * @Date: 2021-05-20 23:04:11
 * @LastEditTime: 2021-05-31 21:22:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-element-admin\.eslintrc.js
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:prettier/recommended' // 添加 prettier 插件
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'no-console': 'off'
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, './build/webpack.base.config.js')
      }
    }
  }
}
