import { Content } from '../types/content';

export class FetchContentResponse<T> {
    draw: number;
    error: string;
    recordsFiltered: number;
    recordsTotal: number;
    totalHDCount: number;
    totalSDCount: number;
    data: T[];
}
