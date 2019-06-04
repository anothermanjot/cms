import { Injectable } from '@angular/core';
import { ApiResponse } from '../model/api-response';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EditorialRail } from '../model/editorial-rail';

@Injectable({
  providedIn: 'root'
})
export class EditorialRailService {

  constructor(private http: HttpClient) { }

  fetchAll(pageType: string): Observable<ApiResponse<EditorialRail[]>> {
    return this.http.get<ApiResponse<EditorialRail[]>>('/api/editorial/page/' + pageType);

  }
}
