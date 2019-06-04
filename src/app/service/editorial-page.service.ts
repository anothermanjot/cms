import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EditorialPage } from '../model/editorial-page';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../model/api-response';

@Injectable({
  providedIn: 'root'
})
export class EditorialPageService {

  constructor(private http: HttpClient) { }

  fetchAll(platform: string): Observable<ApiResponse<EditorialPage[]>> {
    return this.http.get<ApiResponse<EditorialPage[]>>('/api/editorial/page/all?platform=' + platform);
  }
}
