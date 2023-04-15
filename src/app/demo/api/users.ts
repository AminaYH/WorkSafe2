export interface CompanyData {
    users: User[];
    admin: Admin;

}
interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    department: Department;
    address: {
        street: string;
        city: string;

        state: string;
        zip: string;
    };

}


interface Admin {
    id: number;
    name: string;
    email: string;
    phone: string;
    department: string;
    address: {
        street: string;
        city: string;
        state: string;
        zip: string;
    };

    role: string;
}
export type Department = 'Sales' | 'Marketing' | 'IT' | 'HR' | 'Operations';
