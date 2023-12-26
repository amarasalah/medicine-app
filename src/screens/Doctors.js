import React, {useMemo, useCallback, useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Image,
  ScrollView,
  Pressable,
  TextInput,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DoctorCard from '../components/Doctor_Card';
import PharmacieCard from '../components/PharmacieCard';
import BankDuSangCard from '../components/BankDuSangCard';
import donnéesDocteurs from '../data/doctors-data';
import PHARMACIESDATA from '../data/pharmacyData';
import {useIsFocused} from '@react-navigation/native';
import SpecialiteComponent from '../components/SpecialiteComponent';
import SPECIALITIESDATA from '../data/Specialite-data';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Doctors = ({navigation}) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [filterName, setFilterName] = useState('');
  const [filterLocation, setFilterLocation] = useState('');
  const [filteredList, setFilteredList] = useState(donnéesDocteurs);
  const isFocused = useIsFocused();
  const navigateTo = useCallback(
    useMemo(
      () => screen => () => {
        navigation.navigate(screen);
      },
      [navigation],
    ),
    [navigation],
  );
  useEffect(() => {
    let filteredListCopy = [...donnéesDocteurs];

    // Apply filters and update the state
    if (selectedSpecialty) {
      filteredListCopy = filteredListCopy.filter(
        doctor => doctor.spécialité === selectedSpecialty,
      );
    }

    if (filterName) {
      const lowerCaseFilterName = filterName.trim().toLowerCase();
      filteredListCopy = filteredListCopy.filter(doctor => {
        if (doctor.nom && typeof doctor.nom === 'string') {
          const lowerCaseDoctorName = doctor.nom.trim().toLowerCase();
          console.log('Doctor Name:', lowerCaseDoctorName);
          return lowerCaseDoctorName.includes(lowerCaseFilterName);
        } else {
          return false;
        }
      });
    }
    console.log(filteredListCopy);
    if (filterLocation) {
      const lowerCaseFilterLocation = filterLocation.trim().toLowerCase();
      filteredListCopy = filteredListCopy.filter(doctor => {
        if (doctor.adresse && typeof doctor.adresse === 'string') {
          const lowerCaseDoctorLocation = doctor.adresse.trim().toLowerCase();
          return lowerCaseDoctorLocation.includes(lowerCaseFilterLocation);
        } else {
          return false;
        }
      });
    }
    console.log(filteredListCopy);
    // Update the state with the filtered list
    setFilteredList(filteredListCopy);
  }, [selectedSpecialty, filterName, filterLocation]);

  const isSpecialtySelected = specialty => selectedSpecialty === specialty;

  const toggleSpecialty = specialty => {
    setSelectedSpecialty(isSpecialtySelected(specialty) ? null : specialty);
  };

  const uniqueSpecialtiesSet = new Set(
    donnéesDocteurs.map(doctor => doctor.spécialité),
  );

  const uniqueSpecialties = Array.from(uniqueSpecialtiesSet);
  const renderCard = (Component, item) => <Component {...item} />;

  const getIconPath = screen => {
    switch (screen) {
      case 'Doctors':
        return require('../assets/images/medical-team_1.png');
      case 'Pharmacies':
        return require('../assets/images/pharmacy_1.png');
      case 'BloodBank':
        return require('../assets/images/blood-donation_(1)_1.png');
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/bg_(1).png')}
        style={styles.imageBackground}>
        <LinearGradient
          style={styles.gradientContainer}
          locations={[0, 1]}
          colors={['#003399', '#43609a']}
          useAngle={true}
          angle={101.01}>
          <View style={styles.headerContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.salutation}>Salut Zied</Text>
              <Text style={styles.mainText}>Trouvez vos Besoins Medicaux</Text>
            </View>
            <Image
              source={require('../assets/images/image_(3).png')}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
        </LinearGradient>

        <View style={styles.buttonRow}>
          {['Doctors', 'Pharmacies', 'BloodBank'].map((screen, index) => (
            <Pressable
              key={index}
              onPress={navigateTo(screen)}
              style={styles.button}>
              <View
                style={[
                  styles.buttonContainer,
                  isFocused &&
                    screen === 'Doctors' && {backgroundColor: '#ffffff'},
                ]}>
                <Image
                  source={getIconPath(screen)}
                  resizeMode="contain"
                  style={styles.icon}
                />
                <Text style={styles.buttonText}>{screen}</Text>
              </View>
            </Pressable>
          ))}
        </View>
        <View style={styles.inputsContainer}>
          <View style={styles.inputContainer}>
            <FontAwesome
              style={styles.iconInput}
              name="user"
              size={20}
              color="#143880"
            />

            <TextInput
              placeholder=" Nom ..."
              style={styles.placeholder}
              value={filterName}
              onChangeText={text => {
                setFilterName(text), console.log('Filter Name:', filterName);
              }}
            />
          </View>
          <View style={styles.inputContainer}>
            <FontAwesome
              style={styles.iconInput}
              name="location-arrow"
              size={20}
              color="#143880"
            />
            <TextInput
              placeholder=" Localisation..."
              style={styles.placeholder}
              value={filterLocation}
              onChangeText={text => {
                setFilterLocation(text),
                  console.log('Filter Location:', filterLocation);
              }}
            />
          </View>
        </View>

        <View style={styles.scrollContainer}>
          <View contentContainerStyle={styles.scrollContent}>
            <FlatList
              data={uniqueSpecialties}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <Pressable
                  onPress={() => toggleSpecialty(item)}
                  style={[
                    styles.specialtyButton,
                    isSpecialtySelected(item) && styles.selectedSpecialtyButton,
                  ]}>
                  <SpecialiteComponent specialty={item} />
                </Pressable>
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
            <View></View>

            <View style={styles.rowContainer}>
              <Text style={styles.titleText}>Medecins populaires</Text>
              <Text style={styles.linkText}>Voir tout&gt;</Text>
            </View>

            <FlatList
              data={filteredList}
              contentContainerStyle={styles.scrollContainer}
              keyExtractor={item =>
                item.id ? item.id.toString() : Math.random().toString()
              }
              renderItem={({item}) => renderCard(DoctorCard, item)}
              numColumns={2}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientContainer: {
    borderBottomRightRadius: 20,
    paddingBottom: 20,
    height: 150,
  },
  scrollContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    columnGap: 20,
    marginBottom: 200,
  },
  imageBackground: {
    height: '100%',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
    marginLeft: 9,
    marginRight: 20,
  },
  textContainer: {
    width: '60%',
  },
  salutation: {
    fontFamily: 'rubik-300',
    color: '#fff',
    fontSize: 20,
  },
  mainText: {
    fontFamily: 'rubik-600',
    color: '#fff',
    fontSize: 24,
    marginTop: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    flex: 1,
    margin: 5,
  },
  buttonContainer: {
    width: 114,
    height: 40,
    backgroundColor: '#143880',
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  buttonText: {
    fontFamily: 'rubik-regular',
    color: '#fff',
    fontSize: 15,
  },
  placeholder: {
    zIndex: 22,
    fontFamily: 'rubik-regular',
    color: '#121212',
    height: 40,
    width: 170,
    backgroundColor: '#fff',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 60,
    shadowOpacity: 0.25,
    shadowRadius: 20,
    borderRadius: 9,
    marginLeft: 9,
    color: 'rgb(220, 220, 220)',
    fontSize: 14,
    paddingLeft: 20,
    alignSelf: 'center',
  },
  iconInput: {
    marginTop: 9,
    width: '10%',
    position: 'absolute',
    zIndex: 500,
    left: 13,
  },
  inputContainer: {
    flexDirection: 'row',
    width: '50%',

    borderRadius: 3,
    marginTop: 15,
  },
  scrollContent: {
    // Content style for ScrollView
  },
  rowContainer: {
    height: 22,
    flexDirection: 'row',
    marginLeft: 6,
    marginRight: 23,
  },
  titleText: {
    fontFamily: 'rubik-600',
    color: '#121212',
    fontSize: 18,
  },
  linkText: {
    fontFamily: 'rubik-300',
    color: '#121212',
    fontSize: 12,
    marginLeft: 120,
    marginTop: 8,
  },
  sectionContainer: {
    marginTop: 10,
  },
  bankSection: {
    flexDirection: 'row',
    marginBottom: 200,
  },
  inputsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: -4,
    paddingBottom: 10,
  },
  specialtyButton: {
    marginRight: 10,
  },
  selectedSpecialtyButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
  },
});

export default Doctors;
