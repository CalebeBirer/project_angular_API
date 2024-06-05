import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
 
  users: any[] = [];
  selectUser: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getUsers().subscribe(
      data => {
        this.users = data;
      });
  }

  onUseChange(event: any){
    console.log('selected user:', event.detail.value);
    this.selectUser = event.detail.value;
  }
}
