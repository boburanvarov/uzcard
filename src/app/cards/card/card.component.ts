import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {LoadingService} from '../../mains/Shared/Services/loading.service';
import {SwalComponent} from '@sweetalert2/ngx-sweetalert2';
import {FormBuilder, Validators} from '@angular/forms';
import {EnteredService} from '../../mains/Shared/Services/entered.service';

import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
    selector: 'app-entered-list-card-info',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    displayBasic = false;


    errorCode?: string;
    errorText?: string;

    //uzCard
    uzCardList: any;
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
        this.cardInfoForm.patchValue({
            id: data.id,
            resultId: data.result.id,
            username: data.result.username,
            pan: data.result.pan,
            expiry: data.result.expiry,
            status: data.result.status,
            phone: data.result.phone,
            fullName: data.result.fullName,
            balance: data.result.balance,
            sms: data.result.sms,
            pincnt: data.result.pincnt,
            cardtype: data.result.cardtype,
            holdAmount: data.result.holdAmount,
            cashbackAmount: data.result.cashbackAmount,
            aacct: data.result.aacct,
        });
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
            cardPan: this.cardPan?.value
        };
        console.log(card);
        this.enteredService.newCardInfo(card).subscribe((res) => {
            console.log(res);
            this.uzCardList = res;
            if (res.result) {
                this.parseData(this.uzCardList);
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
