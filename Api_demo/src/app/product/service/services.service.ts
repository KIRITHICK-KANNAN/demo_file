import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  data: any = [];

  private apiUrl =
    'https://vfseu.mioot.com/forms/UAT/ITAINDE/admin/api/SearchCases/';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = {
      session_id: '2533',
      sessionToken: '81f5959076976fed9a3a5528254dbd09',
      keyword: '',
      keyType: '0',
      dateType: '0',
      vac: '',
      allSts: 1,
      status: '0',
      from: '',
      to: '',
      startRecord: 1,
      rows: 1,
      caseList: 1,
    };
    return this.http.post<any>(this.apiUrl, body, { headers });
  }
}
