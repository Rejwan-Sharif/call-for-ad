export class QuotationRequest {
    adId?:any;
    vendorId?:any;
    firstName?:any;
    lastName?:any;
    email?:any;
    phone?:any;
    fromDate?:any;
    toDate?:any;
    address?:any;
    message?:any;



    constructor(adId?:any,vendorId?:any,firstName?:any,lastName?:any,email?:any,phone?:any,fromDate?:any,toDate?:any,address?:any,message?:any) {
        this.adId = adId;
        this.vendorId = vendorId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.address = address;
        this.message = message;
    }
}
