// // import config from 'config';
// import {authHeader} from "./auth-header";
//
// export const userService = {
//     login,
//     logout,
//     register,
//     getAll,
//     getById,
//     update,
//     delete: _delete
// };
//
// function login(username, password) {
//     const requestOptions = {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({username, password})
//     };
//
//     return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
//         .then(handleResponse)
//         .then(user => {
//             // Вход выполнен успешно, если в ответе есть токен jwt.
//             if (user.token) {
//                 // Мы будем хранить данные пользователя и токен jwt в локальном хранилище,
//                 // чтобы пользователь находился в системе при переходе или обновлении страницы.
//                 localStorage.setItem('user', JSON.stringify(user));
//             }
//
//             return user;
//         });
// }
//
// function logout() {
//     // функция, которая удаляет пользователя из локального хранилища, чтобы выйти из системы.
//     localStorage.removeItem('user');
// }
//
// function register(user) {
//     const requestOptions = {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(user)
//     };
//
//     return fetch(`${config.apiUrl}/users/register`, requestOptions).then(handleResponse);
// }
//
// function getAll() {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader()
//     };
//
//     return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
// }
//
// function getById(id) {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader()
//     };
//
//     return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
// }
//
// function update(user) {
//     const requestOptions = {
//         method: 'PUT',
//         headers: {...authHeader(), 'Content-Type': 'application/json'},
//         body: JSON.stringify(user)
//     };
//
//     return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse)
// }
//
// function _delete(id) {
//     const requestOptions = {
//         method: 'DELETE',
//         headers: authHeader()
//     };
//
//     return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
// }
//
// function handleResponse(response) {
//     return response.text().then(text => {
//         const data = text && JSON.parse(text);
//         if (!response.ok) {
//             if (response.status === 401) {
//                 // автоматически выходит из системы, если от API возвращается ошибка "401"
//                 logout();
//                 location.reload(true);
//             }
//
//             const error = (data && data.message) || response.statusText;
//             return Promise.reject(error);
//         }
//
//         return data;
//     });
// }