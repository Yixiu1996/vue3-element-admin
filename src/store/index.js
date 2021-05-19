/*
 * @Author: your name
 * @Date: 2021-05-19 21:35:15
 * @LastEditTime: 2021-05-19 21:43:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite-project\src\store\index.ts
 */
import { createStore } from 'vuex';
const defaultState = {
    count: 0
};
export default createStore({
    state() {
        return defaultState;
    },
    mutations: {
        increment(state) {
            state.count++;
        }
    },
    actions: {
        increment(context) {
            context.commit('increment');
        }
    },
    getters: {
        double(state) {
            return 2 * state.count;
        }
    }
});
//# sourceMappingURL=index.js.map