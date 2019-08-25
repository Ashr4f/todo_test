import {
    getLocalUser
} from "./helpers/auth";

const user = getLocalUser();

export default {
    state: {
        currentUser: user,
        isLoggedIn: !!user,
        loading: false,
        auth_error: null,
        lists: [],
        todos: [],
    },
    getters: {
        isLoading(state) {
            return state.loading;
        },
        isLoggedIn(state) {
            return state.isLoggedIn;
        },
        currentUser(state) {
            return state.currentUser;
        },
        authError(state) {
            return state.auth_error;
        },
        lists(state) {
            return state.lists;
        },
        todos(state) {
            return state.lists;
        }

    },
    mutations: {
        register(state) {
            state.loading = true;
            state.auth_error = null;
        },
        registerSuccess(state, payload) {
            state.auth_error = null;
            state.isLoggedIn = false;
            state.loading = false;
            state.currentUser = Object.assign({}, payload.user, {
                token: payload.access_token
            });

            localStorage.setItem("user", JSON.stringify(state.currentUser));
        },
        registerFailed(state, payload) {
            state.loading = false;
            state.auth_error = payload.error;
        },
        login(state) {
            state.loading = true;
            state.auth_error = null;
        },
        loginSuccess(state, payload) {
            state.auth_error = null;
            state.isLoggedIn = true;
            state.loading = false;
            state.currentUser = Object.assign({}, payload.user, {
                token: payload.access_token
            });

            localStorage.setItem("user", JSON.stringify(state.currentUser));
        },
        loginFailed(state, payload) {
            state.loading = false;
            state.auth_error = payload.error;
        },
        logout(state) {
            localStorage.removeItem("user");
            state.isLoggedIn = false;
            state.currentUser = null;
        },
        resetAuthError(state, payload) {
            state.auth_error = null;
        },
        updateList(state, payload) {
            state.lists = payload;
        },
        updateTodos(state, payload) {
            state.todos = payload;
        }
    },
    actions: {
        login(context) {
            context.commit("login");
        },
        register(context) {
            context.commit("register");
        },
        getLists(context) {
            axios.get("/api/lists", {
                headers: {
                    "Authorization": `Bearer ${context.state.currentUser.token}`
                }
            }).then((response) => {
                context.commit("updateList", response.data.lists);
            });
        },
        getTodos(context) {
            axios.get("/api/todos", {
                headers: {
                    "Authorization": `Bearer ${context.state.currentUser.token}`
                }
            }).then((response) => {
                context.commit("updateTodos", response.data.lists);
            });
        }
    }
};
