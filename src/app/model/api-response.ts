export class ApiResponse<T> {
    data: T;
    code: number;
    message: string;
    status: number;
}
