import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { PubSubService } from 'src/app/services/internal/pub-sub.service';

@Component({
  selector: 'top-bar-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input('white') isWhite;
  @Input('back') isBack;
  @Output('backClicked') backClickedEmitter = new EventEmitter();
  menuIsOpened = false;
  menuStateSub?: Subscription;

  constructor(
    private menuController: MenuController,
    private pubSubService: PubSubService
  ) {
    this.pubSubService.menuStateSubject.subscribe((z) => {
      console.log(z);
      this.menuIsOpened = z;
    });
  }

  ngOnInit() {
    console.log(this.isWhite);
  }

  ngOnDestroy(): void {
    this.menuStateSub?.unsubscribe();
  }

  toggleMenu() {
    this.menuController.toggle();
  }

  backClicked() {
    this.backClickedEmitter.emit();
  }
}
