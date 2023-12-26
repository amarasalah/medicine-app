class Docteur {
  constructor(
    idDocteur,
    nom,
    spécialité,
    scoreAvis,
    numTel,
    adresse,
    email,
    services,
    photos,
  ) {
    this.idDocteur = idDocteur;
    this.nom = nom;
    this.spécialité = spécialité;
    this.scoreAvis = scoreAvis;
    this.numTel = numTel;
    this.adresse = adresse;
    this.email = email;
    this.services = services;
    this.photos = photos;
  }
}

export default Docteur;
