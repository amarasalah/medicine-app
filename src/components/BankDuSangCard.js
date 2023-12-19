import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React from 'react';
import {black} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const BankDuSangCard = () => {
  return (
    <Pressable style={styles.banqueDuSangCard}>
      <View>
        <View style={styles.topText}>
          <Text>Bilan de Sante Avance</Text>
          <Text>ideal pour les personnes agees</Text>
          <Pressable>
            <View style={styles.button2}>
              <Text style={{color: 'green'}}>69 tests inclus</Text>
            </View>
          </Pressable>
        </View>
        <View>
          <Image
            source={require('../assets/images/img.png')}
            style={{
              width: 240,
              borderRadius: 4,
              overflow: 'hidden',
            }}></Image>
        </View>
      </View>

      <View style={styles.bottomTextContainer}>
        <View style={styles.bottomText}>
          <View style={styles.bottomPriceText}>
            <Text style={{marginRight: 5, color: 'black', fontSize: 12}}>
              $ 358
            </Text>
            <Text style={{marginRight: 5, color: 'gray', fontSize: 12}}>
              $ 330
            </Text>
            <Text style={{marginRight: 5, color: 'green', fontSize: 12}}>
              35% off
            </Text>
          </View>

          <View>
            <Text>+ 10% de cashback sante</Text>
          </View>
        </View>
        <View style={styles.button}>
          <Text style={{color: 'white', fontSize: 10}}> Reserver </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default BankDuSangCard;

const styles = StyleSheet.create({
  banqueDuSangCard: {
    
    width: 240,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'white',
    marginLeft: 10,
    paddingBottom: 10,
    elevation: 5, // Add this line for Android shadow
    shadowColor: 'black', // Add these lines for iOS shadow
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  bottomText: {
    paddingTop: 10,
  },
  bottomPriceText: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  bottomTextContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  button: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    paddingHorizotal: 0,
    marginTop: 10,
    width: 60,
    borderRadius: 20,
    marginLeft: 0,
  },
  topText: {
    padding: 5,
    marginLeft: 10,
  },
  button2: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,

    marginTop: 10,
    width: 120,
    borderRadius: 20,
    marginLeft: 0,
  },
});
