/*
 * @Author: your name
 * @Date: 2021-05-20 21:53:22
 * @LastEditTime: 2021-05-20 21:53:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-element-admin\src\utils\index.js
 */
export function localGet (key) {
    const value = window.localStorage.getItem(key)
    try {
      return JSON.parse(window.localStorage.getItem(key))
    } catch (error) {
      return value
    }
  }

  export function localSet (key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  export function localRemove (key) {
    window.localStorage.removeItem(key)
  }