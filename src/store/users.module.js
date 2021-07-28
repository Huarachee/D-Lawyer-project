// Этот модуль содержит действия или выборки всех пользователей из api и удаления пользователя,
// а также содержит мутации для каждого из изменений состояния нижнего уровня, участвующих в каждом действии.

import { userService } from "../user.service";

const state = {
    all: {}
};

const actions = {
    getAll({ commit }) {
        commit('getAllRequest');

        userService.getAll()
            .then(
                users => commit('getAllSuccess', users),
                error => commit('getAllFailure', error)
            );
    },

    delete({ commit }, id) {
        commit('deleteRequest', id);

        userService.delete(id)
            .then(
                user => commit('deleteSuccess', id),
                error => commit('deleteFailure', { id, error: error.toString() })
            );
    }
};

const mutations = {
    getAllRequest(state) {
        state.all = { loading: true };
    },
    getAllSuccess(state, users) {
        state.all = { items: users };
    },
    getAllFailure(state, error) {
        state.all = { error };
    },
    deleteRequest(state, id) {
        // add 'deleting:true' property to user being deleted
        state.all.items = state.all.items.map(user =>
            user.id === id
                ? { ...user, deleting: true }
                : user
        )
    },
    deleteSuccess(state, id) {
        // Удаляем удаленного пользователя из состояния
        state.all.items = state.all.items.filter(user => user.id !== id)
    },
    deleteFailure(state, { id, error }) {
        // Удаляем свойство 'deleting:true' и добавляем свойство пользователю - 'deleteError:[error]'
        state.all.items = state.items.map(user => {
            if (user.id === id) {
                // Делаем копию пользователя без свойств 'deleting:true'
                const { deleting, ...userCopy } = user;
                // Возвращаем копию пользователя со свойством 'deleteError:[error]'
                return { ...userCopy, deleteError: error };
            }

            return user;
        })
    }
};

export const users = {
    namespaced: true,
    state,
    actions,
    mutations
};