import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'window1255 to utf8 converter';

  openGitHub(): void {
    window.open(environment.github_url, '_blank');
  }
}
