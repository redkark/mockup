import { Component } from '@angular/core';
import { SessionService } from 'src/app/services/common/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mockup';
  
  constructor(
    public sessionService: SessionService,
  ) { }

  logout() {
    this.sessionService.logout();
  }
 
}
