import { DoBootstrap, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { CheckboxNewComponent } from '../../core/components/checkbox-new/checkbox-new.component';

@NgModule({
  declarations: [CheckboxNewComponent],
  imports: [BrowserModule, FormsModule, UpgradeModule],
  providers: [],
})
export class AppModule implements DoBootstrap {
  constructor(private upgrade: UpgradeModule) {}
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['myApp'], { strictDi: true });
  }
}
