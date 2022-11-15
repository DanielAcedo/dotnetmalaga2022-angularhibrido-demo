import { DoBootstrap, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { CheckboxNewComponent } from '../../core/components/checkbox-new/checkbox-new.component';
import { todoServiceProvider } from '../ajs-upgraded-providers';
import { TodoRepositoryNewService } from './todo/services/todo-repository-new/todo-repository-new.service';
import { ShowDoneTodoComponent } from './todo/components/show-done-todo/show-done-todo.component';
import CheckboxUpgradedComponent from '../../core/components/checkbox-upgraded/checkbox-upgraded.component';

@NgModule({
  declarations: [
    CheckboxNewComponent,
    ShowDoneTodoComponent,
    CheckboxUpgradedComponent,
  ],
  imports: [BrowserModule, FormsModule, UpgradeModule],
  providers: [todoServiceProvider, TodoRepositoryNewService],
  exports: [ShowDoneTodoComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private upgrade: UpgradeModule) {}
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['myApp'], { strictDi: true });
  }
}
