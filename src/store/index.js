import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '上海';
try {
    if (window.localStorage.city) {
        defaultCity = window.localStorage.city
    }
} catch (error) {
    console.log('localStorage错误');
}

export default new Vuex.Store({
    state: {
        city: defaultCity
    },
    mutations: {
        change(state, payload) {
            console.log(1);
            state.city = payload;
            try {
                window.localStorage.city = payload
            } catch (error) {

            }
        }
    },
    actions: {},
    modules: {}
})