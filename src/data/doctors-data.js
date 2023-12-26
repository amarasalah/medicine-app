import Docteur from '../models/doctor';
const donnéesDocteurs = [
  new Docteur(
    1,
    'Dr. Dupont',
    'Cardiologie',
    4.8,
    '01-23-45-67-89',
    '123 Rue de la Santé',
    'dr.dupont@example.com',
    ['Consultation', 'Échocardiographie'],
    ['photo1.jpg'],
  ),
  new Docteur(
    2,
    'Dr. Martin',
    'Gynécologie',
    4.5,
    '01-98-76-54-32',
    '456 Avenue Médicale',
    'dr.martin@example.com',
    ['Consultation', 'Accouchements'],
    ['photo2.jpg'],
  ),
  new Docteur(
    3,
    'Dr. Dubois',
    'Dermatologie',
    4.2,
    '01-34-56-78-90',
    '789 Boulevard Beauté',
    'dr.dubois@example.com',
    ['Consultation', 'Chirurgie dermatologique'],
    ['photo3.jpg'],
  ),
  new Docteur(
    4,
    'Dr. Moreau',
    'Pédiatrie',
    4.9,
    '01-67-89-01-23',
    '234 Avenue Enfance',
    'dr.moreau@example.com',
    ['Consultation', 'Vaccinations'],
    ['photo4.jpg'],
  ),
  new Docteur(
    5,
    'Dr. Lefevre',
    'Ophtalmologie',
    4.6,
    '01-45-67-89-01',
    '567 Rue Vision',
    'dr.lefevre@example.com',
    ['Consultation', 'Examens de la vue'],
    ['photo5.jpg'],
  ),
  new Docteur(
    6,
    'Dr. Rousseau',
    'Orthopédie',
    4.4,
    '01-89-01-23-45',
    '890 Boulevard Mobilité',
    'dr.rousseau@example.com',
    ['Consultation', 'Chirurgie orthopédique'],
    ['photo6.jpg'],
  ),
  new Docteur(
    7,
    'Dr. Laurent',
    'Neurologie',
    4.7,
    '01-23-45-67-89',
    '123 Rue Cerveau',
    'dr.laurent@example.com',
    ['Consultation', 'IRM cérébral'],
    ['photo7.jpg'],
  ),
  new Docteur(
    8,
    'Dr. Garcia',
    'Urologie',
    4.3,
    '01-98-76-54-32',
    '456 Avenue Urine',
    'dr.garcia@example.com',
    ['Consultation', 'Chirurgie urologique'],
    ['photo8.jpg'],
  ),
  new Docteur(
    9,
    'Dr. Petit',
    'Endocrinologie',
    4.5,
    '01-34-56-78-90',
    '789 Boulevard Hormones',
    'dr.petit@example.com',
    ['Consultation', 'Traitement hormonal'],
    ['photo9.jpg'],
  ),
  new Docteur(
    10,
    'Dr. Leroy',
    'Psychiatrie',
    4.2,
    '01-67-89-01-23',
    '234 Avenue Psyché',
    'dr.leroy@example.com',
    ['Consultation', 'Thérapie cognitivo-comportementale'],
    ['photo10.jpg'],
  ),
  new Docteur(
    11,
    'Dr. Gérard',
    'Rhumatologie',
    4.8,
    '01-45-67-89-01',
    '567 Rue Souplesse',
    'dr.gerard@example.com',
    ['Consultation', 'Échographie articulaire'],
    ['photo11.jpg'],
  ),
  new Docteur(
    12,
    'Dr. Dubois',
    'Allergologie',
    4.6,
    '01-89-01-23-45',
    '890 Boulevard Allergies',
    'dr.dubois2@example.com',
    ['Consultation', 'Tests allergiques'],
    ['photo12.jpg'],
  ),
  new Docteur(
    13,
    'Dr. Blanchard',
    'Chirurgie générale',
    4.9,
    '01-23-45-67-89',
    '123 Rue Chirurgie',
    'dr.blanchard@example.com',
    ['Consultation', 'Chirurgie abdominale'],
    ['photo13.jpg'],
  ),
  new Docteur(
    14,
    'Dr. Mercier',
    'Oncologie',
    4.7,
    '01-98-76-54-32',
    '456 Avenue Cancer',
    'dr.mercier@example.com',
    ['Consultation', 'Chimiothérapie'],
    ['photo14.jpg'],
  ),
  new Docteur(
    15,
    'Dr. Dufour',
    'Cardiologie',
    4.5,
    '01-34-56-78-90',
    '789 Boulevard Cœur',
    'dr.dufour@example.com',
    ['Consultation', 'Électrocardiogramme'],
    ['photo15.jpg'],
  ),
  new Docteur(
    16,
    'Dr. Leroux',
    'Gastro-entérologie',
    4.4,
    '01-67-89-01-23',
    '234 Avenue Digestion',
    'dr.leroux@example.com',
    ['Consultation', 'Endoscopie digestive'],
    ['photo16.jpg'],
  ),
  new Docteur(
    17,
    'Dr. Morel',
    'Médecine interne',
    4.7,
    '01-45-67-89-01',
    '567 Rue Organes',
    'dr.morel@example.com',
    ['Consultation', 'Examens sanguins'],
    ['photo17.jpg'],
  ),
  new Docteur(
    18,
    'Dr. Faure',
    'Pneumologie',
    4.3,
    '01-89-01-23-45',
    '890 Boulevard Poumons',
    'dr.faure@example.com',
    ['Consultation', 'Tests respiratoires'],
    ['photo18.jpg'],
  ),
  new Docteur(
    19,
    'Dr. Michel',
    'Néphrologie',
    4.6,
    '01-23-45-67-89',
    '123 Rue Reins',
    'dr.michel@example.com',
    ['Consultation', 'Échographie rénale'],
    ['photo19.jpg'],
  ),
  new Docteur(
    20,
    'Dr. Renault',
    'Radiologie',
    4.8,
    '01-98-76-54-32',
    '456 Avenue Radiations',
    'dr.renault@example.com',
    ['Consultation', 'Radiographie'],
    ['photo20.jpg'],
  ),
  new Docteur(
    21,
    'Dr. Dupuis',
    'Cardiologie',
    4.7,
    '01-12-34-56-78',
    '210 Rue Cardio',
    'dr.dupuis@example.com',
    ['Consultation', 'Échocardiographie'],
    ['photo21.jpg'],
  ),
  new Docteur(
    22,
    'Dr. Durand',
    'Gynécologie',
    4.4,
    '01-23-45-67-89',
    '321 Avenue Obstétrique',
    'dr.durand@example.com',
    ['Consultation', 'Accouchements'],
    ['photo22.jpg'],
  ),
  new Docteur(
    23,
    'Dr. Lemoine',
    'Dermatologie',
    4.1,
    '01-34-56-78-90',
    '432 Boulevard Peau',
    'dr.lemoine@example.com',
    ['Consultation', 'Chirurgie dermatologique'],
    ['photo23.jpg'],
  ),
  new Docteur(
    24,
    'Dr. Simon',
    'Pédiatrie',
    4.6,
    '01-45-67-89-01',
    '543 Avenue Enfants',
    'dr.simon@example.com',
    ['Consultation', 'Vaccinations'],
    ['photo24.jpg'],
  ),
  new Docteur(
    25,
    'Dr. Rousseau',
    'Ophtalmologie',
    4.3,
    '01-89-01-23-45',
    '654 Rue Visionnaire',
    'dr.rousseau2@example.com',
    ['Consultation', 'Examens de la vue'],
    ['photo25.jpg'],
  ),
  new Docteur(
    26,
    'Dr. Leclerc',
    'Orthopédie',
    4.5,
    '01-34-56-78-90',
    '765 Boulevard Mobilité',
    'dr.leclerc@example.com',
    ['Consultation', 'Chirurgie orthopédique'],
    ['photo26.jpg'],
  ),
  new Docteur(
    27,
    'Dr. Leroux',
    'Neurologie',
    4.2,
    '01-23-45-67-89',
    '876 Rue Cerveau',
    'dr.leroux2@example.com',
    ['Consultation', 'IRM cérébral'],
    ['photo27.jpg'],
  ),
  new Docteur(
    28,
    'Dr. Garcia',
    'Urologie',
    4.4,
    '01-98-76-54-32',
    '987 Avenue Urine',
    'dr.garcia2@example.com',
    ['Consultation', 'Chirurgie urologique'],
    ['photo28.jpg'],
  ),
  new Docteur(
    29,
    'Dr. Petit',
    'Endocrinologie',
    4.8,
    '01-67-89-01-23',
    '1098 Boulevard Hormones',
    'dr.petit2@example.com',
    ['Consultation', 'Traitement hormonal'],
    ['photo29.jpg'],
  ),
  new Docteur(
    30,
    'Dr. Martin',
    'Psychiatrie',
    4.3,
    '01-12-34-56-78',
    '210 Avenue Psyché',
    'dr.martin2@example.com',
    ['Consultation', 'Thérapie cognitivo-comportementale'],
    ['photo30.jpg'],
  ),
  new Docteur(
    31,
    'Dr. Gérard',
    'Rhumatologie',
    4.9,
    '01-45-67-89-01',
    '321 Rue Souplesse',
    'dr.gerard2@example.com',
    ['Consultation', 'Échographie articulaire'],
    ['photo31.jpg'],
  ),
  new Docteur(
    32,
    'Dr. Dubois',
    'Allergologie',
    4.7,
    '01-23-45-67-89',
    '432 Boulevard Allergies',
    'dr.dubois3@example.com',
    ['Consultation', 'Tests allergiques'],
    ['photo32.jpg'],
  ),
  new Docteur(
    33,
    'Dr. Blanchard',
    'Chirurgie générale',
    4.5,
    '01-34-56-78-90',
    '543 Rue Chirurgie',
    'dr.blanchard2@example.com',
    ['Consultation', 'Chirurgie abdominale'],
    ['photo33.jpg'],
  ),
  new Docteur(
    34,
    'Dr. Mercier',
    'Oncologie',
    4.2,
    '01-45-67-89-01',
    '654 Avenue Cancer',
    'dr.mercier2@example.com',
    ['Consultation', 'Chimiothérapie'],
    ['photo34.jpg'],
  ),
  new Docteur(
    35,
    'Dr. Dufour',
    'Cardiologie',
    4.8,
    '01-89-01-23-45',
    '765 Boulevard Cœur',
    'dr.dufour2@example.com',
    ['Consultation', 'Électrocardiogramme'],
    ['photo35.jpg'],
  ),
  new Docteur(
    36,
    'Dr. Leroux',
    'Gastro-entérologie',
    4.6,
    '01-67-89-01-23',
    '876 Avenue Digestion',
    'dr.leroux3@example.com',
    ['Consultation', 'Endoscopie digestive'],
    ['photo36.jpg'],
  ),
  new Docteur(
    37,
    'Dr. Morel',
    'Médecine interne',
    4.3,
    '01-23-45-67-89',
    '987 Rue Organes',
    'dr.morel2@example.com',
    ['Consultation', 'Examens sanguins'],
    ['photo37.jpg'],
  ),
  new Docteur(
    38,
    'Dr. Faure',
    'Pneumologie',
    4.7,
    '01-98-76-54-32',
    '1098 Boulevard Poumons',
    'dr.faure2@example.com',
    ['Consultation', 'Tests respiratoires'],
    ['photo38.jpg'],
  ),
  new Docteur(
    39,
    'Dr. Michel',
    'Néphrologie',
    4.5,
    '01-34-56-78-90',
    '210 Rue Reins',
    'dr.michel2@example.com',
    ['Consultation', 'Échographie rénale'],
    ['photo39.jpg'],
  ),
  new Docteur(
    40,
    'Dr. Renault',
    'Radiologie',
    4.2,
    '01-67-89-01-23',
    '321 Avenue Radiations',
    'dr.renault2@example.com',
    ['Consultation', 'Radiographie'],
    ['photo40.jpg'],
  ),
  new Docteur(
    41,
    'Dr. Dupuis',
    'Cardiologie',
    4.6,
    '01-12-34-56-78',
    '432 Rue Cardio',
    'dr.dupuis2@example.com',
    ['Consultation', 'Échocardiographie'],
    ['photo41.jpg'],
  ),
  new Docteur(
    42,
    'Dr. Durand',
    'Gynécologie',
    4.3,
    '01-23-45-67-89',
    '543 Avenue Obstétrique',
    'dr.durand2@example.com',
    ['Consultation', 'Accouchements'],
    ['photo42.jpg'],
  ),
  new Docteur(
    43,
    'Dr. Lemoine',
    'Dermatologie',
    4.8,
    '01-34-56-78-90',
    '654 Boulevard Peau',
    'dr.lemoine2@example.com',
    ['Consultation', 'Chirurgie dermatologique'],
    ['photo43.jpg'],
  ),
  new Docteur(
    44,
    'Dr. Simon',
    'Pédiatrie',
    4.4,
    '01-45-67-89-01',
    '765 Avenue Enfants',
    'dr.simon2@example.com',
    ['Consultation', 'Vaccinations'],
    ['photo44.jpg'],
  ),
  new Docteur(
    45,
    'Dr. RousseauFff',
    'Ophtalmologie',
    4.7,
    '01-89-01-23-45',
    '876 Rue Visionnaire',
    'dr.rousseau3@example.com',
    ['Consultation', 'Examens de la vue'],
    ['photo45.jpg'],
  ),
  new Docteur(
    46,
    'Dr. Leclerc',
    'Orthopédie',
    4.1,
    '01-34-56-78-90',
    '987 Boulevard Mobilité',
    'dr.leclerc2@example.com',
    ['Consultation', 'Chirurgie orthopédique'],
    ['photo46.jpg'],
  ),
  new Docteur(
    47,
    'Dr. Leroux',
    'Neurologie',
    4.5,
    '01-23-45-67-89',
    '1098 Rue Cerveau',
    'dr.leroux3@example.com',
    ['Consultation', 'IRM cérébral'],
    ['photo47.jpg'],
  ),
  new Docteur(
    48,
    'Dr. Garcia',
    'Urologie',
    4.9,
    '01-98-76-54-32',
    '210 Avenue Urine',
    'dr.garcia3@example.com',
    ['Consultation', 'Chirurgie urologique'],
    ['photo48.jpg'],
  ),
  new Docteur(
    49,
    'Dr. Petit',
    'Endocrinologie',
    4.2,
    '01-67-89-01-23',
    '321 Boulevard Hormones',
    'dr.petit3@example.com',
    ['Consultation', 'Traitement hormonal'],
    ['photo49.jpg'],
  ),
  new Docteur(
    50,
    'Dr. Martin',
    'Psychiatrie',
    4.8,
    '01-12-34-56-78',
    '432 Avenue Psyché',
    'dr.martin3@example.com',
    ['Consultation', 'Thérapie cognitivo-comportementale'],
    ['photo50.jpg'],
  ),
];

export default donnéesDocteurs;
