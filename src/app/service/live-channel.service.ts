import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { flatMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FetchContentResponse } from '../model/fetch-content-response';
import { LiveChannel } from '../model/live-channel';
import { ApiResponse } from '../model/api-response';

@Injectable({
  providedIn: 'root'
})
export class LiveChannelService {

  constructor(private http: HttpClient) { }

  getAllChannels(filter: ChannelFilter, offset: number, size: number): Observable<FetchContentResponse<LiveChannel>> {
    if (filter.queryString) {
      const query = {
        queryString: filter.queryString || null,
        ott: filter.ott + '',
        enabled: filter.enabled + '',
        contentType: 'CMS_MM_CHANNEL',
        offset: offset.toString(),
        max: size.toString()
      };
      return this.http.get<ApiResponse<{ title: string, id: number }[]>>('/admin/search/autocompletebyShowType', {
        params: query
      })
        .pipe(flatMap(resp1 => {
          console.log('hellooo');
          const list = resp1.data.map(l => l.id);
          return this.http.post<ApiResponse<FetchContentResponse<LiveChannel>>>('/api/liveChannel/list', list,
            {
              params: {
                start: offset.toString(),
                length: size.toString()
              }
            }).pipe(map(data => data.data));
        }))
        ;
    }
    return this.http.post<ApiResponse<FetchContentResponse<LiveChannel>>>('/api/liveChannel/list/filter', this.getBody(size, offset),
      {
        params: {
          IsOtt: filter.ott + '',
          IsEnabled: filter.enabled + '',
        }
      })
      .pipe(map(res => {
        return res.data;
      }));
  }

  private getBody(size: number, offset: number) {
    return {
      draw: 5,
      columns: [
        { data: 'mmId', name: '', searchable: true, orderable: false, search: { value: '', regex: false } },
        { data: 'languages', name: '', searchable: true, orderable: false, search: { value: '', regex: false } },
        { data: 'hdSd', name: '', searchable: true, orderable: false, search: { value: '', regex: false } },
        { data: 'contractName', name: '', searchable: true, orderable: false, search: { value: '', regex: false } }
      ],
      order: [{ column: 0, dir: 'desc' }],
      start: offset,
      length: size,
      search: { value: '', regex: false },
      orderBy: null,
      sortBy: 'desc'
    };
  }
}
