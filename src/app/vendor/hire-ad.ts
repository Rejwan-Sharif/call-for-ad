export class HireAd {
    title?: String;
    location?: String;
    name?: String;
    phone?: String;
    email?: String;
    address?: String;
    type?: String;
    purpose?: String;
    city?: String;
    facing?: String;
    otherInfo?: String;
    vendorId?: any;

    constructor(title?: String, location?: String, name?: String, phone?: String, email?: String, address?: String, type?: String, purpose?: String, city?: String, facing?: String, otherInfo?: String, vendorId?: any) {
        this.title = title;
        this.location = location;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.type = type;
        this.purpose = purpose;
        this.city = city;
        this.facing = facing;
        this.otherInfo = otherInfo;
        this.vendorId = vendorId;
    }
}
