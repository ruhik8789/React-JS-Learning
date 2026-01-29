export let isAuthenticated = false;

export const login = (username, password) => {
    if(username === 'admin' && password === 'admin') {
        isAuthenticated = true;
        return true;
    }
    return false;
};

export const logout = () => {
    isAuthenticated = false;
}