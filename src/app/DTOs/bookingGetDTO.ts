import { bookingPostDTO } from "./bookingPostDTO";

export interface bookingGetDTO extends bookingPostDTO{

    actualcheckOutDate:string,
    actualcheckInDate:string,
    status:string,
    roomNumber:string,
    guestName:string,
    paymentStatus:string
    

}