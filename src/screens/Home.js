import React, {useMemo, useCallback} from 'react';
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

const HomeScreen = ({navigation}) => {
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
                    screen === 'Pharmacies' && {backgroundColor: '#ffffff'}, // Conditionally change the background color
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

        <TextInput
          placeholder="   Search..."
          style={styles.placeholder}></TextInput>

        <View style={styles.scrollContainer}>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.rowContainer}>
              <Text style={styles.titleText}>Medecins populaires</Text>
              <Text style={styles.linkText}>Voir tout&gt;</Text>
            </View>

            <FlatList
              data={donnéesDocteurs}
              keyExtractor={item =>
                item.id ? item.id.toString() : Math.random().toString()
              }
              renderItem={({item}) => renderCard(DoctorCard, item)}
              horizontal
              showsHorizontalScrollIndicator={false}
            />

            <Text style={styles.titleText}>Pharmacies en vedette</Text>

            <FlatList
              data={PHARMACIESDATA}
              keyExtractor={item =>
                item.id ? item.id.toString() : Math.random().toString()
              }
              renderItem={({item}) => renderCard(PharmacieCard, item)}
              horizontal
              showsHorizontalScrollIndicator={false}
            />

            <View style={styles.sectionContainer}>
              <Text style={styles.titleText}>Banque Du Sang pour Vous</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.bankSection}>
                {[1, 2].map(item => renderCard(BankDuSangCard, item))}
              </ScrollView>
            </View>
          </ScrollView>
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
    marginBottom: 10,
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
});

export default HomeScreen;
