import * as types from '@/actions/mutation-types.js';

const initialState = {
    homeName: '快和财税'
}

const mutations = {
    [types.QUERY_GLOBAL_NAME](state) {
        return state;
    },
    [types.UPDATE_GLOBAL_NAME](state, action) {
        return {
            ...state,
            homeName: action.payload
        }
    }
}

export default function (state = initialState, action) {
    if (!mutations[action.type]) return state;
    return {
        ...state,
        ...mutations[action.type]
    }
}