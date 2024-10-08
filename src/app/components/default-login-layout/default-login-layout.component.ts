
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-login-layout',
  standalone: true, 
  imports: [],
  templateUrl: './default-login-layout.component.html',
  styleUrls: ['./default-login-layout.component.scss']
})
export class DefaultLoginLayoutComponent{

  @Input() title: String = "";
  @Input() primaryBtnText: String = "";
  @Input() secundaryBtnText: String = "";
  @Input() pragas: String = "";

}
