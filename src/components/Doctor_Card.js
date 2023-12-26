import donnéesDocteurs from '../data/doctors-data';

import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// const generateStars = scoreAvis => {
//   const numberOfStars = Math.floor(scoreAvis);
//   const stars = [];

//   for (let i = 0; i < 5; i++) {
//     stars.push(
//       <FontAwesome
//         key={i}
//         name={i < numberOfStars ? 'star' : 'star-o'} // Use the appropriate icon names for filled and empty stars
//         size={20}
//         color="#FFD700" // You can customize the color
//         style={styles.star}
//       />,
//     );
//   }

//   return stars;
// };

const handleCardClick = cardId => {
  console.log(`Card clicked: ${cardId}`);
};
const handleGender = () => {
  let randomNumber = Math.random();
  const threshold = 0.5;
  let result = randomNumber < threshold ? 'men' : 'women';
  return result;
};

const DoctorCard = ({nom, spécialité, scoreAvis, idDocteur}) => {
  return (
    <Pressable onPress={() => handleCardClick('doctor1')}>
      <View style={styles.group1}>
        <View style={styles.rect5Stack}>
          <View style={styles.rect5}>
            <Text style={styles.drFillerupGrab1}>{nom}</Text>
            <Text style={styles.medicinSpecialiste1}>{spécialité}</Text>
            <View style={styles.starContainer}>
              <FontAwesome
                key={1}
                name="star"
                size={20}
                color="#FFD700"
                style={styles.star}
              />
            </View>
          </View>
          <Image
            source={{
              uri: `https://randomuser.me/api/portraits/${handleGender()}/${idDocteur}.jpg`,
            }}
            resizeMode="contain"
            style={styles.image5}></Image>
        </View>
      </View>
    </Pressable>
  );
};

export default DoctorCard;

const styles = StyleSheet.create({
  group1: {
    width: 180,
    height: 235,
    marginVertical: 15,
    marginHorizontal: 10,
  },
  rect5: {
    top: 2,
    left: 3,
    width: 175,
    height: 255,
    position: 'absolute',
    backgroundColor: '#E6E6E6',
    borderRadius: 13,
  },
  drFillerupGrab1: {
    fontFamily: 'rubik-500',
    color: '#121212',
    marginTop: 170,
    marginLeft: 5,
  },
  medicinSpecialiste1: {
    fontFamily: 'roboto-regular',
    color: 'rgba(156,156,156,1)',
    fontSize: 14,
    marginLeft: 21,
  },
  star: {
    marginRight: 5, // Adjust the spacing between stars
  },

  image6Row: {
    height: 8,
    flexDirection: 'row',
    marginTop: 2,
    marginLeft: 28,
    marginRight: 40,
  },
  image5: {
    top: 0,
    left: 0,
    width: 180,
    height: 175,
    position: 'absolute',
  },
  rect5Stack: {
    marginTop: 10,
    width: 120,
    height: 172,
  },
  image27: {
    width: 12,
    height: 12,
    marginTop: 0,
    marginLeft: 68,
  },
});
