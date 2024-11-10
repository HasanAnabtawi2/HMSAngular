import { InvoicePostDTO } from "./InvoicePostDTO";

export class InvoiceGetDTO extends InvoicePostDTO{
    pricePerDay!:number;
    duration!:number;
    guestName!:string;
    roomType!:string;
    totalAmount!:number
    invoiceNumber!:number



}