import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeviceInfoService {
  constructor(private http: HttpClient) {}
  saveDeviceInfo(
    deviceType: string,
    deviceInfo: any,
    ipAddress: string,
    latitude: string,
    longitude: string
  ): Observable<any> {
    const url = 'https://politicoprophetbackend.onrender.com/api/saveDeviceInfo'; // Replace with your backend API endpoint
    const deviceInfoData = {
      deviceType,
      deviceInfo,
      ipAddress,
      latitude,
      longitude,
    };
    return this.http.post(url, deviceInfoData);
  }
}
