import { Component } from '@angular/core';
import {AppState} from "../app.state";

@Component({
  selector: 'app-dark',
  template: `<disqus [identifier]="identifier" [title]="title" [shortname]="shortname" (comment)="display($event)"></disqus>`
})
export class DarkComponent {

  shortname = 'ng2';
  identifier = 'dark';
  title = 'Dark Theme';

  constructor(appState: AppState) {
    /** add dark class to app */

    appState.set('themeSwitcher', true);
    appState.set('themeName', 'Dark Theme');
    appState.set('themeCover', prefixRepo("../../assets/img/dark.png"));
  }

  display(comment){
    console.log(comment);
    alert(`It works 🤠 \n${JSON.stringify(comment)}`);
  }

}
var prefixRepo = (path) => {
  return 'ng2-disqus' + path;
};
