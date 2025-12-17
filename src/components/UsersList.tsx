import { useState, useEffect } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
    username: string;
}

const UsersList = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // 1. Начинаем загрузку (loading уже true)

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                // 2. Проверяем статус ответа
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // 3. Данные загружены успешно
                // Что тут сделать с data?
                setUsers(data);
                // Что сделать с loading?
                setLoading(false);
            })
            .catch(err => {
                // 4. Произошла ошибка
                // Что сохранить в error?
                setError(err.message);
                // Что сделать с loading?
                setLoading(false);
            });
    }, []);

    // 5. Отображение по состоянию
    if (loading) {
        return <div>Loading users...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Users List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <strong>{user.name}</strong> (@{user.username})
                        <br />
                        Email: {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersList;