// Используется фейковый back-end, чтобы не применять API, которое должно приходить с сервера

let users = JSON.parse(localStorage.getItem('users')) || [];

export function fakeBackEnd() {
    let realFetch = window.fetch; // С помощью fetch обычно отправляют HTTP запросы GET из Vue в серверный API

    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // Оборачиваем в setTimeout, для того, чтобы имитировать вызов API с сервера
            setTimeout(() => {
                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    // Получаем параметры из POST запроса
                    let params = JSON.parse(opts.body);

                    // Проверяем, соответствует ли пользователь при входе учетным данным для входа
                    let filteredUsers = users.filter(user => {
                        return user.username === params.username && user.password === params.password;
                    });

                    if (filteredUsers.length) {
                        // Если данные, введенные пользователям действительны - то мы возвращаем поддельный jwt token.
                        let user = filteredUsers[0];
                        let responseJson = {
                            id: user.id,
                            username: user.username,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            token: 'fake-jwt-token'
                        };
                        resolve({ok: true, text: () => Promise.resolve(JSON.stringify(responseJson))}); // JSON.stringify преобразует значение JavaScript в строку JSON
                    } else {
                        // Если данные, введенные пользователем недействительны, то мы возвращаем ошибку с сообщением
                        reject('Неверный логин или пароль!');
                    }

                    return;
                }

                // Получения пользователя
                if (url.endsWith('/users') && opts.method === 'GET') {
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(users)) });
                    } else {
                        // возвращаем ошибку "401" с сообщением, если токен нулевой или недействительный
                        reject('Неавторизованный');
                    }

                    return;
                }

                // Получение пользователя по id
                if (url.match(/\/users\/\d+$/) && opts.method === 'GET') {
                    if(opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        // Находим пользователя по id в массиве пользователей
                        let urlParts = url.split('/');
                        let id = parseInt(urlParts[urlParts.length -1]); // parseInt - преобразует аргумент в строковый тип.
                        let matchedUsers = users.filter(user => { return user.id === id; })
                        let user = matchedUsers.length ? matchedUsers[0] : null;

                        resolve({ ok: true, text: () => JSON.stringify(user)});
                    } else {
                        // Если данные, введенные пользователем недействительны, то мы возвращаем ошибку с сообщением
                        reject('Неверный логин или пароль!');
                    }

                    return;
                }

                // Регистрация пользователя
                if (url.endsWith('/users/register') && opts.method === 'POST') {
                    // Получение нового пользователя из post body
                    let newUser = JSON.parse(opts.body);

                    // Проверка
                    let duplicateUser = users.filter(user => { return user.username === newUser.username; }).length;
                    if (duplicateUser) {
                        reject('Username "' + newUser.username + '" is already token');
                        return;
                    }

                    // Сохранение нового пользователя
                    newUser.id = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1;
                    users.push(newUser);
                    localStorage.setItem('users', JSON.stringify(users));

                    // respond 200 OK
                    resolve({ ok: true, text: () => Promise.resolve() });

                    return;
                }

                // Удаление пользователя
                if (url.match(/\/users\/\d+$/) && opts.method === 'Удалить') {
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        // поиск пользователя по id из массива
                        let urlParts = url.split('/');
                        let id = parseInt(urlParts[urlParts.length -1]);
                        for (let i = 0; i < users.length; i++) {
                            let user = users[i];
                            if (user.id === id) {
                                // удаление пользователя
                                users.splice(i, 1);
                                localStorage.setItem('users', JSON.stringify(users));
                                break;
                            }
                        }

                        // respond 200 OK
                        resolve({ ok: true, text: () => Promise.resolve() });
                    } else {
                        // Возвращение ошибки 401, если токен нулевый или недействительный
                        reject('Неавторизированный');
                    }

                    return;
                }

                // пройти через любые запросы, не обработанные выше.
                realFetch(url, opts).then(response => resolve(response));
            }, 500);
        });
    }
}