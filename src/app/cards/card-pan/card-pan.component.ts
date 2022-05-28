import {Component, OnInit, ViewChild} from '@angular/core';
import {SwalComponent} from "@sweetalert2/ngx-sweetalert2";
import {LoadingService} from "../../mains/Shared/Services/loading.service";
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {EnteredService} from "../../mains/Shared/Services/entered.service";
import {NzNotificationService} from "ng-zorro-antd/notification";

@Component({
  selector: 'app-card-pan',
  templateUrl: './card-pan.component.html',
  styleUrls: ['./card-pan.component.css']
})
export class CardPanComponent implements OnInit {

  displayBasic = false;


  errorCode?: string;
  errorText?: string;

  //uzCard
  uzCardPanList: any[]= [];
  uzCardShow = false;


  @ViewChild('errorSwal')
  public readonly errorSwal!: SwalComponent;


  @ViewChild('successSwal')
  public readonly successSwal!: SwalComponent;

  constructor(
    public loadingService: LoadingService,
    private router: Router,
    private fb: FormBuilder,
    private enteredService: EnteredService,
    private notification: NzNotificationService
  ) {
  }

  ngOnInit(): void {

  }


  // individual form

  uzCardForm = this.fb.group({
    cardNumber: ['', Validators.required],
    // cardExpiry: ['', Validators.required],
  });

  cardInfoForm = this.fb.group({
    id: [],
    resultId: [],
    username: [],
    pan: [],
    expiry: [],
    status: [],
    phone: [],
    fullName: [],
    balance: [],
    sms: [],
    pincnt: [],
    cardtype: [],
    holdAmount: [],
    cashbackAmount: [],
    aacct: [],
  });


  get cardPan() {
    return this.uzCardForm.get('cardNumber');
  }


  get cardExpiry() {
    return this.uzCardForm.get('cardExpiry');
  }

  showBasicDialog() {
    this.displayBasic = true;

  }

  errorSwalFunc() {
    this.router.navigate(['/']);
    this.uzCardForm.reset();
  }

  successSwalFunc() {
    this.router.navigate(['/']);
  }


  uzCardInfValue(name: string) {
    return this.cardInfoForm.controls[name].value;
  }


  parseData(data: any) {
    console.log(data[0].id, 'id');
   data.forEach((el:any)=> {
     this.cardInfoForm.patchValue({
       id: el.id,
       resultId: el.id,
       username: el.username,
       pan: el.pan,
       expiry: el.expiry,
       status: el.status,
       phone: el.phone,
       fullName: el.fullName,
       balance: el.balance,
       sms: el.sms,
       pincnt: el.pincnt,
       cardtype: el.cardtype,
       holdAmount: el.holdAmount,
       cashbackAmount: el.cashbackAmount,
       aacct: el.aacct,
     });
   })
  }

  createNotification(type: string, title: string, subtitle: string): void {
    this.notification.create(
      type,
      title,
      subtitle
    );
  }
  //getCardInfo
  getCardInfo() {

    const card = {
      cardPan: this.cardPan?.value,
    };
    console.log(card);
    this.enteredService.newCardPanInfo(card).subscribe((res) => {
      console.log(res);
      this.uzCardPanList = res.result;
      if (res.result) {
        this.parseData(this.uzCardPanList);
        this.uzCardShow = true;
        this.createNotification('success' ,'Успешно введена карта данных', '')
        // this.messageService.add({
        //     key: 'tst',
        //     severity: 'success',
        //     summary: 'Успешно введена карта данных'
        // });
      }
      if (res.result === null) {
        this.errorSwal.fire();
        this.errorCode = 'Код 2';
        this.errorText = 'Карта введена неправильно';

      }

    }, (error) => {
      console.log(error);
      if (error.status === 0) {
        this.errorSwal.fire();
        this.errorText = 'ERR_INTERNET_DISCONNECTED';
      }else{
        this.errorSwal.fire();
        this.errorCode = error.status;
        this.errorText = error.error.error;
      }

    });
  }

}
