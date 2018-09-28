import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(iconREgistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    iconREgistry.addSvgIcon("ahmed", sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/ahmed.svg'))
  }
}
