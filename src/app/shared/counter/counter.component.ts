import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'nts-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() value: number | null;
  @Input() updatedAt: number | null;

  @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();

  get formattedDate(): string | null {
    if (!this.updatedAt) {
      return null;
    }
    const tmp = new Date();
    const utc = this.updatedAt + (tmp.getTimezoneOffset() * 60000);
    const dt = new Date(utc);
    return dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds();
  }

  incrementHandler() {
    this.increment.emit();
  }

  decrementHandler() {
    this.decrement.emit();
  }

  resetHandler() {
    this.reset.emit();
  }
}
