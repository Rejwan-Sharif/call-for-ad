export class Mail {

     
	 to?:any;
     subject?:string;
	 body?:any;
     constructor(to?:any, subject?:string, body?:any){
        this.to = to;
        this.subject = subject;
        this.body = body;
     }
}
