import { Component, HostBinding, OnInit, OnDestroy, Input, ElementRef  } from '@angular/core';
import indicatorTemplates  from "../../../template/technical-indicator-template.json";
import { ModalService } from "../service/modalService.service";
@Component({
    moduleId: module.id,
    selector: 'strategy-suggestion',
    templateUrl: 'strategy-suggestion.component.html',
    styleUrls: ['strategy-suggestion.component.less'],
})

export class StrategySuggestionComponent implements OnInit, OnDestroy {
      @Input() id: string;
      private element: any;
      technicalIndicatorTemplates : any[] = indicatorTemplates;


      constructor(private modalService: ModalService, private el: ElementRef) {
          this.element = el.nativeElement;
      }

      ngOnInit(): void {
          // ensure id attribute exists
          if (!this.id) {
              console.error('modal must have an id');
              return;
          }

          // move element to bottom of page (just before </body>) so it can be displayed above everything else
          document.body.appendChild(this.element);

          // close modal on background click
          this.element.addEventListener('click', el => {
              if (el.target.className === 'strategy-suggestion') {
                  this.close();
              }
          });

          // add self (this modal instance) to the modal service so it's accessible from controllers
          this.modalService.add(this);
      }

      // remove self from modal service when component is destroyed
      ngOnDestroy(): void {
          this.modalService.remove(this.id);
          this.element.remove();
      }

      // open modal
      open(): void {
          this.element.style.display = 'block';
    //      document.body.classList.add('strategy-suggestion-open');
      }

      // close modal
      close(): void {
          this.element.style.display = 'none';
    //      document.body.classList.remove('strategy-suggestion-open');
      }
  }
