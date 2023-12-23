class Appointment {
  constructor(
    patientId,
    professionalId,
    date,
    time,
    reason,
    status,
    paymentStatus,
  ) {
    this.patientId = patientId;
    this.professionalId = professionalId;
    this.date = date;
    this.time = time;
    this.reason = reason;
    this.status = status;
    this.paymentStatus = paymentStatus;
  }
}

export default Appointment;
