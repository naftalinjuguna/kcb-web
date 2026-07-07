export interface User {
    id: number;
    firstName: string;
    lastname: string;
    phone: number;
    email: string;
    password: string;
    role: 'USER' | 'ADMIN';
}