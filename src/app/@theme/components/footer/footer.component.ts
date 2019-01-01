import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created by Golson Xie using <b><a href="https://akveo.com" target="_blank">Akveo</a></b> 2019</span>
    <div class="socials">
      <a href="https://github.com/oldfatcrab/" target="_blank" class="ion ion-social-github"></a>
      <a href="https://www.linkedin.com/in/golsonxie/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
