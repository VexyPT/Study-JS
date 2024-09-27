class Booking {
  #customerName;
  #checkInDate;
  #checkOutDate;
  
  constructor(customerName, checkInDate, checkOutDate) {
    this.#customerName = customerName;
    this.#checkInDate = new Date(checkInDate);
    this.#checkOutDate = new Date(checkOutDate);
  }

  getCustomerName() {
    return this.#customerName;
  }

  getCheckIn() {
    return this.#checkInDate;
  }

  getCheckOut() {
    return this.#checkOutDate;
  }

  getCheckOutFormated() {
    return this.#checkOutDate.toLocaleDateString(); 
  }

  stayDuration() {
    const oneDay = 1000 * 60 * 60 * 24; 
    const diffTime = this.#checkOutDate.getTime() - this.#checkInDate.getTime();
    return Math.round(diffTime / oneDay);
  }

  isValidDate() {
    return this.#checkOutDate > this.#checkInDate;
  }
}

class Hotel {
  #reservations;

  constructor() {
    this.#reservations = [];
  }

  addReservation(reservation) {
    if (!reservation.isValidDate()) {
      return "Data inválida.";
    }
    this.#reservations.push(reservation);
  }

  listReservations() {
    return this.#reservations.map((r) => {
      return `Customer Name: ${r.getCustomerName()}\nCheck-In Date: ${r.getCheckIn().toLocaleDateString()}\nCheck-Out Date: ${r.getCheckOutFormated()}\nDuration: ${r.stayDuration()} days`;
    }).join("\n\n");
  }
}

const booking1 = new Booking("Daniel", "2024-09-28", "2024-10-02");
const booking2 = new Booking("Lia", "2024-10-01", "2024-10-05");

const hotel = new Hotel();
hotel.addReservation(booking1);
hotel.addReservation(booking2);

console.log(hotel.listReservations());