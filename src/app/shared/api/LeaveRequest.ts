export interface Leave {
    type: string;
}
export class LeaveRequest {
    id?: number;
    name?: string;
    startDate?: Date;
    endDate?: Date;
    reason?:string;
    username?: string;
    Department?: string;
}
