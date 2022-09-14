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
import { environment } from 'src/environments/environment';

@Component({
  selector: 'top-bar-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input('white') isWhite;
  @Input('back') isBack;
  @Input('backBlack') isBackBlack;
  @Output('backClicked') backClickedEmitter = new EventEmitter();
  menuIsOpened = false;
  menuStateSub?: Subscription;
  backBlack = false;
  avatar = null;
  baseApiUrl = environment.api_url;
  isLoaded = false;
  constructor(
    private menuController: MenuController,
    private pubSubService: PubSubService
  ) {
    this.pubSubService.menuStateSubject.subscribe((z) => {
      if (z) this.menuIsOpened = !z.isClosing;
    });
    this.pubSubService.avatar.subscribe((z) => {
      this.avatar = z;
      this.isLoaded = true;
    });
  }

  ngOnInit() {
    if (this.isBackBlack === '') {
      this.backBlack = true;
    } else {
      this.backBlack = false;
    }
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
