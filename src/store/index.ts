import {createStore} from 'vuex'

const defaultState = {
    count: 0
}
export default createStore({
    state(){
        return defaultState
    },
    mutations: {
        addCount(state: typeof defaultState){
            state.count++
        }
    },
    actions:{
        addCount(ctx){
            ctx.commit('addCount')
        }
    },
    getters: {
        double(state: typeof defaultState) {
            return 2 * state.count
        }
    }
})