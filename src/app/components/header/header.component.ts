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
  @Input('backBlack') isBackBlack;
  @Output('backClicked') backClickedEmitter = new EventEmitter();
  menuIsOpened = false;
  menuStateSub?: Subscription;
  backBlack = false;

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
    console.log('bW :',this.isBackBlack)
    if(this.isBackBlack === ''){
      this.backBlack = true;
    }else{
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
