import {
  Directive,
  ElementRef,
  EventEmitter,
  Injector,
  Input,
  Output,
} from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({ selector: 'checkbox' })
export default class CheckboxUpgradedComponent extends UpgradeComponent {
  @Input('name')
  public controlName: string;

  @Input()
  public label: string;

  @Input()
  public value: boolean;
  @Output()
  public valueChange: EventEmitter<boolean> = new EventEmitter();

  constructor(elementRef: ElementRef, injector: Injector) {
    super('checkbox', elementRef, injector);
  }
}
