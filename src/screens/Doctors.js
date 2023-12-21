import React, {Component} from 'react';
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
import BankDuSangCard from '../components/BankDuSangCard';
import DoctorCard from '../components/Doctor_Card';
import donnéesDocteurs from '../data/doctors-data';
import PharmacieCard from '../components/PharmacieCard';
import PHARMACIESDATA from '../data/pharmacyData';

function Doctors({navigation}) {
  function doctorsPageHandler() {
    navigation.navigate('Doctors');
  }
  function pharmaciesPageHandler() {
    navigation.navigate('Pharmacies');
  }
  function bloodBankPageHandler() {
    navigation.navigate('BloodBank');
  }

  function handleDoctorCard({item}) {
    return <DoctorCard drName={item.nom} drSpec={item.spécialité} />;
  }
  function handlePharmacyCard({item}) {
    return (
      <PharmacieCard
        pharmacistName={item.pharmacistName}
        review={item.reviews}
        hourlyRate={item.hourlyRate}
      />
    );
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/bg_(1).png')}
        style={styles.imageBackground}>
        <LinearGradient
          style={styles.rectangleLineargradient}
          locations={[0, 1]}
          colors={['#003399', '#43609a']}
          useAngle={true}
          angle={101.01}>
          <View style={styles.salutZiedColumnRow}>
            <View style={styles.salutZiedColumn}>
              <Text style={styles.salutZied}>Salut Zied</Text>
              <Text style={styles.text5}>
                Trouvez vos Besoins
                {'\n'}Medicale
              </Text>
            </View>
            <Image
              source={require('../assets/images/image_(3).png')}
              resizeMode="contain"
              style={styles.image}></Image>
          </View>
        </LinearGradient>
        <View style={styles.textStackStack}>
          <View style={styles.textStack}>
            <Text style={styles.text}></Text>
            <View style={styles.scrollArea}>
              <ScrollView>
                <View style={styles.medecinsPopulaires1Row}>
                  <Text style={styles.medecinsPopulaires1}>
                    Medecins populaires
                  </Text>
                  <Text style={styles.voirTout1}>Voir tout&gt;</Text>
                </View>
                <View style={styles.group1Row}>
                  <FlatList
                    data={donnéesDocteurs}
                    keyExtractor={item => item.id}
                    renderItem={handleDoctorCard}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  />
                </View>

                <Text style={styles.medecinsPopulaires9}>
                  Pharmacies en vedette
                </Text>
                <View style={styles.group4Row}>
                  <FlatList
                    data={PHARMACIESDATA}
                    keyExtractor={item => item.id}
                    renderItem={handlePharmacyCard}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  />
                </View>
                <View>
                  <View style={styles.banqueDuSangContainer}>
                    <Text style={styles.medecinsPopulaires9}>
                      Banque Du Sang pour Vous
                    </Text>
                  </View>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.sectionBank}>
                    <BankDuSangCard />

                    <BankDuSangCard />
                  </ScrollView>
                </View>
              </ScrollView>
            </View>
          </View>
          <Text style={styles.text2}></Text>
        </View>
        <View style={styles.buttonRow}>
          <Pressable style={styles.button} onPress={doctorsPageHandler}>
            <View style={styles.rect2}>
              <View style={styles.image2Row}>
                <Image
                  source={require('../assets/images/medical-team_1.png')}
                  resizeMode="contain"
                  style={styles.image2}></Image>
                <Text style={styles.medecins}>Medecins</Text>
              </View>
            </View>
          </Pressable>
          <Pressable style={styles.button2} onPress={pharmaciesPageHandler}>
            <View style={styles.rect3}>
              <View style={styles.image3Row}>
                <Image
                  source={require('../assets/images/pharmacy_1.png')}
                  resizeMode="contain"
                  style={styles.image3}></Image>
                <Text style={styles.pharmacie}>Pharmacie</Text>
              </View>
            </View>
          </Pressable>
          <Pressable style={styles.button3} onPress={bloodBankPageHandler}>
            <View style={styles.rect4}>
              <View style={styles.image4Stack}>
                <Image
                  source={require('../assets/images/blood-donation_(1)_1.png')}
                  resizeMode="contain"
                  style={styles.image4}></Image>
                <Text style={styles.banqueDuSang}>Banque du Sang</Text>
              </View>
            </View>
          </Pressable>
        </View>

        <TextInput
          placeholder="   Search..."
          style={styles.placeholder}></TextInput>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rectangleLineargradient: {
    borderBottomRightRadius: 20,

    paddingBottom: 20,
  },
  imageBackground: {
    height: '100%',
    // paddingHorizontal: 20,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  rect: {
    width: 375,
    height: 232,
    borderBottomRightRadius: 27,
    overflow: 'hidden',
  },
  rect_imageStyle: {},
  salutZied: {
    fontFamily: 'rubik-300',
    color: 'rgba(255,255,255,1)',
    fontSize: 20,
  },
  text5: {
    fontFamily: 'rubik-600',
    color: 'rgba(255,255,255,1)',
    fontSize: 24,
    marginTop: 20,
  },
  salutZiedColumn: {
    width: 243,
  },
  image: {
    width: 60,
    height: 60,
    marginLeft: 43,
    marginTop: 7,
  },
  salutZiedColumnRow: {
    height: 100,
    flexDirection: 'row',
    marginTop: 79,
    marginLeft: 9,
    marginRight: 20,
  },
  text: {
    top: 57,
    left: 188,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
  },
  scrollArea: {
    top: 0,
    left: 0,
    width: 380,
    height: 568,
    position: 'absolute',
  },
  scrollArea_contentContainerStyle: {
    flex: 1,
    width: 380,
  },
  medecinsPopulaires1: {
    fontFamily: 'rubik-600',
    color: '#121212',
    fontSize: 18,
  },
  voirTout1: {
    fontFamily: 'rubik-300',
    color: '#121212',
    fontSize: 12,
    marginLeft: 120,
    marginTop: 8,
  },
  medecinsPopulaires1Row: {
    height: 22,
    flexDirection: 'row',
    marginLeft: 6,
    marginRight: 23,
  },

  group3: {
    width: 120,
    height: 170,
    marginLeft: 6,
  },
  rect7: {
    top: 2,
    left: 3,
    width: 117,
    height: 170,
    position: 'absolute',
    backgroundColor: '#E6E6E6',
    borderRadius: 13,
  },
  drFillerupGrab3: {
    fontFamily: 'rubik-500',
    color: '#121212',
    marginTop: 117,
    marginLeft: 5,
  },
  medicinSpecialiste3: {
    fontFamily: 'roboto-regular',
    color: 'rgba(156,156,156,1)',
    fontSize: 9,
    marginLeft: 21,
  },
  image20: {
    width: 8,
    height: 8,
  },
  image20_imageStyle: {},
  image21: {
    width: 8,
    height: 8,
  },
  image24: {
    width: 8,
    height: 8,
    marginLeft: 3,
  },
  image23: {
    width: 8,
    height: 8,
    marginLeft: 2,
  },
  image22: {
    width: 8,
    height: 8,
    marginLeft: 1,
  },
  image25: {
    width: 8,
    height: 8,
    marginLeft: 3,
  },
  image20Row: {
    height: 8,
    flexDirection: 'row',
    marginTop: 2,
    marginLeft: 28,
    marginRight: 40,
  },
  image19: {
    top: 0,
    left: 0,
    width: 120,
    height: 117,
    position: 'absolute',
  },
  rect7Stack: {
    width: 120,
    height: 172,
  },
  group2: {
    width: 120,
    height: 170,
  },
  rect6: {
    top: 2,
    left: 3,
    width: 117,
    height: 170,
    position: 'absolute',
    backgroundColor: '#E6E6E6',
    borderRadius: 13,
  },
  drFillerupGrab2: {
    fontFamily: 'rubik-500',
    color: '#121212',
    marginTop: 117,
    marginLeft: 5,
  },
  medicinSpecialiste2: {
    fontFamily: 'roboto-regular',
    color: 'rgba(156,156,156,1)',
    fontSize: 9,
    marginLeft: 21,
  },
  image13: {
    width: 8,
    height: 8,
  },
  image13_imageStyle: {},
  image14: {
    width: 8,
    height: 8,
  },
  image17: {
    width: 8,
    height: 8,
    marginLeft: 3,
  },
  image16: {
    width: 8,
    height: 8,
    marginLeft: 2,
  },
  image15: {
    width: 8,
    height: 8,
    marginLeft: 1,
  },
  image18: {
    width: 8,
    height: 8,
    marginLeft: 3,
  },
  image13Row: {
    height: 8,
    flexDirection: 'row',
    marginTop: 2,
    marginLeft: 28,
    marginRight: 40,
  },
  image12: {
    top: 0,
    left: 0,
    width: 120,
    height: 117,
    position: 'absolute',
  },
  rect6Stack: {
    width: 120,
    height: 172,
  },
  group1Row: {
    height: 170,
    flexDirection: 'row',
    marginTop: 16,
    marginRight: 14,
  },
  medecinsPopulaires9: {
    fontFamily: 'rubik-600',
    color: '#121212',
    fontSize: 18,
    marginTop: 7,
    marginLeft: 6,
  },
  group4: {
    width: 86,
    height: 115,
  },
  rect8: {
    width: 86,
    height: 115,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 14,
  },
  image26: {
    width: 8,
    height: 8,
  },
  image28: {
    width: 8,
    height: 8,
    marginLeft: 42,
    marginTop: 1,
  },
  loremIpsum: {
    fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 6,
    marginLeft: 1,
    marginTop: 2,
  },
  image26Row: {
    height: 10,
    flexDirection: 'row',
    marginTop: 4,
    marginLeft: 10,
    marginRight: 8,
  },
  image29: {
    width: 53,
    height: 53,
    marginTop: 2,
    marginLeft: 15,
  },
  drCrick: {
    top: 0,
    left: 3,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
  },
  text6: {
    top: 16,
    left: 8,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 9,
  },
  loremIpsum2: {
    top: 15,
    left: 0,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#0ebe7f',
    fontSize: 10,
  },
  drCrickStack: {
    width: 57,
    height: 28,
    marginTop: 6,
    marginLeft: 14,
  },

  group6: {
    width: 86,
    height: 115,
    marginLeft: 4,
  },
  rect10: {
    width: 86,
    height: 115,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 14,
  },
  image33: {
    width: 8,
    height: 8,
  },
  image34: {
    width: 8,
    height: 8,
    marginLeft: 42,
    marginTop: 1,
  },
  text10: {
    fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 6,
    marginLeft: 1,
    marginTop: 2,
  },
  image33Row: {
    height: 10,
    flexDirection: 'row',
    marginTop: 4,
    marginLeft: 10,
    marginRight: 8,
  },
  image35: {
    width: 53,
    height: 53,
    marginTop: 2,
    marginLeft: 15,
  },
  drCrick3: {
    top: 0,
    left: 3,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
  },
  text11: {
    top: 16,
    left: 8,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 9,
  },
  text12: {
    top: 15,
    left: 0,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#0ebe7f',
    fontSize: 10,
  },
  drCrick3Stack: {
    width: 57,
    height: 28,
    marginTop: 6,
    marginLeft: 14,
  },
  group7: {
    width: 86,
    height: 115,
    marginLeft: 7,
  },
  rect11: {
    width: 86,
    height: 115,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 14,
  },
  image36: {
    width: 8,
    height: 8,
  },
  image37: {
    width: 8,
    height: 8,
    marginLeft: 42,
    marginTop: 1,
  },
  text13: {
    fontFamily: 'roboto-500',
    color: '#121212',
    fontSize: 6,
    marginLeft: 1,
    marginTop: 2,
  },
  image36Row: {
    height: 10,
    flexDirection: 'row',
    marginTop: 4,
    marginLeft: 10,
    marginRight: 8,
  },
  image38: {
    width: 53,
    height: 53,
    marginTop: 2,
    marginLeft: 15,
  },
  drCrick4: {
    top: 0,
    left: 3,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
  },
  text14: {
    top: 16,
    left: 8,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 9,
  },
  text15: {
    top: 15,
    left: 0,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#0ebe7f',
    fontSize: 10,
  },
  drCrick4Stack: {
    width: 57,
    height: 28,
    marginTop: 6,
    marginLeft: 14,
  },
  group4Row: {
    height: 115,
    flexDirection: 'row',
    marginTop: 4,
    marginLeft: 6,
    marginRight: 15,
  },
  textStack: {
    top: 0,
    left: 0,
    width: 380,
    height: 568,
    position: 'absolute',
  },
  text2: {
    top: 57,
    left: 188,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
  },
  textStackStack: {
    width: 380,
    height: 568,
    marginTop: 117,
  },
  button: {
    width: 114,
    height: 40,
  },
  rect2: {
    width: 114,
    height: 40,
    backgroundColor: 'rgba(20,56,128,1)',
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
    flexDirection: 'row',
  },
  image2: {
    width: 24,
    height: 24,
  },
  medecins: {
    fontFamily: 'rubik-regular',
    color: 'rgba(253,253,253,1)',
    fontSize: 15,
    marginLeft: 5,
    marginTop: 3,
  },
  image2Row: {
    height: 24,
    flexDirection: 'row',
    flex: 1,
    marginRight: 13,
    marginLeft: 6,
    marginTop: 8,
  },
  button2: {
    width: 114,
    height: 40,
    marginLeft: 7,
  },
  rect3: {
    width: 114,
    height: 40,
    backgroundColor: 'rgba(20,56,128,1)',
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
    flexDirection: 'row',
  },
  image3: {
    width: 24,
    height: 24,
  },
  pharmacie: {
    fontFamily: 'rubik-regular',
    color: 'rgba(255,252,252,1)',
    fontSize: 15,
    marginTop: 5,
  },
  image3Row: {
    height: 24,
    flexDirection: 'row',
    flex: 1,
    marginRight: 9,
    marginLeft: 6,
    marginTop: 8,
  },
  button3: {
    width: 114,
    height: 40,
    marginLeft: 8,
  },
  rect4: {
    width: 114,
    height: 40,
    backgroundColor: '#143880',
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
  },
  image4: {
    top: 0,
    left: 0,
    width: 24,
    height: 24,
    position: 'absolute',
  },
  banqueDuSang: {
    top: 7,
    left: 23,
    position: 'absolute',
    fontFamily: 'rubik-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 11,
  },
  image4Stack: {
    width: 107,
    height: 24,
    marginTop: 8,
    marginLeft: 4,
  },
  buttonRow: {
    height: 40,
    flexDirection: 'row',
    marginTop: -666,
    marginLeft: 9,
    marginRight: 9,
  },
  placeholder: {
    fontFamily: 'rubik-regular',
    color: '#121212',
    height: 40,
    width: 357,
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
    marginTop: 4,
    marginLeft: 9,
  },
  sectionBank: {
    flexDirection: 'row',
    marginBottom: 200,
  },
});

export default Doctors;
