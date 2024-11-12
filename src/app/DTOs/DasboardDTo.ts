

export interface DashboardDTO {

    numberOfConfirmedBookings: number
  numberOfCanceledBookings:number,
  numberOfCheckedOutBookings: number,
  numberOfCheckedInBookings: number,
  numberOfPaidInvoices: number,
  numberOfUnpaidInvoices: number,
  totalIncome: number,
  totalNumberOfGuests: number,
  roomsByRoomTypes: [
    {
      type: string,
      availableRooms: number,
      occupiedRooms: number,
      numberOfBookings: number
    }
  ],
  numberOfRooms: number,
  numberOfTypes: number
}
    

