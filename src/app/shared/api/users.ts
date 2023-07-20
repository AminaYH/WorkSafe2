export interface CompanyData {
    users: Employee[];
    admin: Admin;

}
export class Employee {
    id?: number;
    name?: string;
    username?:string;
    email?: string;
    age?: string;
    departement?: string;
    address?: string;

    role?: Rol[];
    password?: string;


}


export interface Rol {
    createdAt: string;
    modifiedAt?: string;
    roleId: number;
    name: string;
}

interface Admin {
    id?: string;
    name?: string;
    email?: string;
    phone?: string;
    department?: string;
    address?: string;

    role?: string;
}
export type Department = 'Sales' | 'Marketing' | 'IT' | 'HR' | 'Operations';
