import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Subscriber } from '../model/subscriber';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap, toArray, tap, flatMap } from 'rxjs/operators';
import { SubscriberStatus } from '../constants/SubscriberStatus';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {

  constructor(private http: HttpClient) { }

  getSubscribers(queryString: string, status: SubscriberStatus, offset: number, size: number): Observable<any> {

    if (queryString || status) {
      const query = {
        queryString: queryString || null,
        contentType: 'CMS_SUBSCRIBERS',
        subscriberAccountStatus: (status && status.toString()) || '',
        offset: offset.toString(),
        max: size.toString()
      };
      return this.http.get<any>('/admin/search/autocompletebyShowType', {
        params: query
      })
      .pipe(flatMap(resp1 => {
        console.log("hellooo")
        let list = resp1.data.contentList.map(l => l.id);
        return this.http.post<any>('/api/subscriber/list', list,
        {
          params: {
            start: offset.toString(),
            length: size.toString()
          }
        }).pipe(map( res => {res.data.recordsTotal = resp1.data.count; return res.data;}));
      }))
      ;
    }
    return this.http.post<any>('/api/subscriber/list', null ,
    {
      params: {
        start: offset.toString(),
        length: size.toString()
      }
    })
    .pipe(map( res => {
      return res.data;
    }));
  }
}
