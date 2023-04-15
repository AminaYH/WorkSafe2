export interface Leave {
    type: string;
    code: string;
}
export interface LeaveRequest {
    id: number;
    employeeName: string;
    startDate: Date;
    endDate: Date;
    status: string;
    leaveType:Leave;
    reason:string;
}
