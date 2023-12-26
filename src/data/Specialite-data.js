class Specialty {
  constructor(id, specialty) {
    this.id = id;
    this.specialty = specialty;
  }
}

const SPECIALITIESDATA = [
  new Specialty('1', 'Cardiologue'),
  new Specialty('2', 'Gynécologue'),
  new Specialty('3', 'Neurologue'),
  new Specialty('4', 'Dermatologue'),
  new Specialty('5', 'Orthopédiste'),
  new Specialty('6', 'Ophtalmologue'),
  new Specialty('7', 'Pédiatre'),
  new Specialty('8', 'Psychiatre'),
  new Specialty('9', 'Chirurgien'),
  new Specialty('10', 'Endocrinologue'),
];
export default SPECIALITIESDATA;
