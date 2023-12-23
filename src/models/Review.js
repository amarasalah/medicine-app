class Review {
  constructor(professionalId, patientId, rating, comment, timestamp) {
    this.professionalId = professionalId;
    this.patientId = patientId;
    this.rating = rating;
    this.comment = comment;
    this.timestamp = timestamp;
  }
}

export default Review;
