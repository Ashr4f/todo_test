export function register(credentials) {
    return new Promise((res, rej) => {
        axios.post("/api/register", credentials)
            .then((response) => {
                res(response.data);
            })
            .catch((err) => {
                rej("Please provide valid informations");
                console.error(err);
            });
    });
}
export function login(credentials) {
    return new Promise((res, rej) => {
        axios.post("/api/auth/login", credentials)
            .then((response) => {
                res(response.data);
            })
            .catch((err) => {
                rej("Invalid Email or Password");
            });
    });
}
export function getLocalUser() {
    const userStr = localStorage.getItem("user");

    if (!userStr) {
        return null;
    }
    return JSON.parse(userStr);
}
