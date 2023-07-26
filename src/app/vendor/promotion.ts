export class Promotion {

    promotionId?:any;
    adId?:any;
    promotionCategory?:any;
    email?:any;
    cardNumber?:any;
    expireDate?:any;
    cvv?:any;
    cardHolderName?:any;
    mfs?:any;
    mfsNumber?:any;
    tsNumber?:any;
    subTotal?:any;
    vat?:any;
    total?:any;

    constructor(promotionId?:any, adId?:any, promotionCategory?:any, email?:any, cardNumber?:any,expireDate?:any, cvv?:any, cardHolderName?:any, mfs?:any, mfsNumber?:any, tsNumber?:any, subTotal?:any, vat?:any, total?:any){
        this.promotionId =  promotionId;
        this.adId = adId;
        this.promotionCategory = promotionCategory;
        this.email = email;
        this.cardNumber = cardNumber;
        this.expireDate = expireDate;
        this.cvv = cvv;
        this.cardHolderName= cardHolderName;
        this.mfs = mfs;
        this.mfsNumber = mfsNumber;
        this.tsNumber = tsNumber;
        this.subTotal = subTotal;
        this.vat = vat;
        this.total = total;
    }
}
