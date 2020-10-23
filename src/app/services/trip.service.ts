import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceResponse } from '../models/service-response';
import { RestApi } from '../models/rest-api';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  api = new RestApi();

  constructor(private httpClient:HttpClient) { }

  getTourByTourId(tourId: number): Observable<ServiceResponse>{
    const url = `${this.api.PREVIEW_TOUR_API}/${tourId}`;
    return this.httpClient.get<ServiceResponse>(url);
  }
}
