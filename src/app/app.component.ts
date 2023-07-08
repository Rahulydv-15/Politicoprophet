import { Component, OnInit } from '@angular/core';
import { AngularDeviceInformationService } from 'angular-device-information';
import { DeviceInfoService } from './services/device-info.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Politicoprophet';
  ipAddress!: string;
  latitude!: string;
  longitude!: string;

  constructor(
    private angularDeviceInfoService: AngularDeviceInformationService,
    private http: HttpClient,
    private deviceInfoService: DeviceInfoService
  ) {}

  async ngOnInit(): Promise<void> {
    const deviceType = this.angularDeviceInfoService.getDeviceType();
    const deviceInfo = this.angularDeviceInfoService.getDeviceInfo();

    try {
      const ipResponse: any = await this.http
        .get('https://api.ipify.org?format=json')
        .toPromise();
      this.ipAddress = ipResponse?.ip || '';

      if (navigator.geolocation) {
        const position = await new Promise<GeolocationPosition | null>(
          (resolve) => {
            navigator.geolocation.getCurrentPosition(
              (pos) => resolve(pos),
              () => resolve(null)
            );
          }
        );

        if (position) {
          this.latitude = position.coords.latitude + '';
          this.longitude = position.coords.longitude + '';
        } else {
          this.latitude = 'Nan';
          this.longitude = 'Nan';
        }
      } else {
        this.latitude = 'Nan';
        this.longitude = 'Nan';
      }

      await this.deviceInfoService
        .saveDeviceInfo(
          deviceType,
          deviceInfo,
          this.ipAddress,
          this.latitude,
          this.longitude
        )
        .toPromise();
      console.log('Device information saved successfully.');
    } catch (error) {
      console.error('Error saving device information:', error);
    }
  }
}
