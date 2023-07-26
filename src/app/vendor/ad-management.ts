export class AdManagement {
  id?:any;
  title?:any;
	 location?:any;
	 type?:any;
	 status?:any;
	 height?:any;
	 width?:any;
	 area?:any;
	 purpose?:any;
	 facing?:any;
	 price?:any;
	 title_image?:any;
	 second_image?:any;
	 third_image?:any;
	 fourth_image?:any;
	 final_image?:any;
	 other_details?:any;
	 adStatus?:any;
    vendorId?:any;
    promotionStatus?:any;

     constructor(id?:any,title?:any, location?:any, type?:any, status?:any, height?:any, width?:any, area?:any, purpose?:any, 
       facing?:any, price?:any, title_image?:any, second_image?:any, third_image?:any, fourth_image?:any, final_image?:any, 
       other_details?:any, adStatus?:any,vendorId?:any,promotionStatus?:any){
        this.id = id;  
        this.title = title;
        this.location = location;
        this.type = type;
        this.status = status;
        this.height = height;
        this.width  = width;
        this.area = area;
        this.purpose = purpose;
        this.facing =facing;
        this.price = price;
        this.title_image = title_image;
        this.second_image = second_image;
        this.third_image = third_image;
        this.fourth_image = fourth_image;
        this.final_image = final_image;
        this.other_details = other_details;
        this.adStatus = adStatus;
        this.vendorId = vendorId;
        this.promotionStatus = promotionStatus;
     }
}


