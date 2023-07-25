export class Newspaper {

    id?: any;
    newspaperName?: any;
    name?: any;
    organizationName?: any;
    phone?: any;
    email?: any;
    publishDate?: any;
    adTitle?: any;
    adDescription?: any;
    document?: any;
    publishStatus?: any;

    constructor(id?: any, newspaperName?: any, name?:any, organizationName?: any, phone?: any, email?: any, publishDate?: any, adTitle?: any, adDescription?: any, document?: any, publishStatus?: any){
        this.id = id;
        this.newspaperName  = newspaperName;
        this.name = name;
        this.organizationName = organizationName;
        this.phone = phone;
        this.email = email;
        this.publishDate = publishDate;
        this.adTitle = adTitle;
        this.adDescription = adDescription;
        this.document = document;
        this.publishStatus = publishStatus;
    }
}
