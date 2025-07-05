import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  template: `
    <div class="modal" [class.show]="open" tabindex="-1" [attr.aria-hidden]="!open" (click)="onBackdropClick($event)">
      <div class="modal-dialog" (click)="$event.stopPropagation()">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" (click)="close.emit()" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <ng-content select="[modal-title]"></ng-content>
          </div>
          <div class="modal-body">
            <ng-content select="[modal-body]"></ng-content>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() open = false;
  @Output() close = new EventEmitter<void>();

  onBackdropClick(event: Event) {
    this.close.emit();
  }
}
