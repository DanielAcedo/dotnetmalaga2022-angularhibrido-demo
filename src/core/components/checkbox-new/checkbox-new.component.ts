import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'checkbox-new',
  templateUrl: './checkbox-new.component.html',
  styleUrls: ['./checkbox-new.component.scss'],
})
export class CheckboxNewComponent {
  @Input()
  public name: string = '';

  @Input()
  public label: string = '';

  @Input()
  public value: boolean = false;
  @Output()
  public valueChange: EventEmitter<boolean> = new EventEmitter();

  public valueChanged(value: boolean) {
    this.valueChange.emit(value);
  }
}
