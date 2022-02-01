import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import AppContent from './body.js';


export default function App() {
  const [headline, setHeadline] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?' +
      'country=in&' +
      'apiKey={YOUR_API_KEY}').then((response) => response.json())
      .then((res) => res.articles)
      .then((res1) => setHeadline(res1))
      .catch((err) => {
        console.log(err);
      })
   
  }, []);

  return (

    <View style={styles.container}>
      <Text style = {styles.header}>
        Exclusive News For You!
      </Text>
      <ScrollView style = {styles.scroll}>
      {
          headline.map((item, key) => {
            return (
              <AppContent key = {key} headline = {item.title} description = {item.description} link = {item.url} />
            )
          })
        }
      
      <StatusBar style="auto" />
      </ScrollView>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(5, 99, 163)',
  },
  scroll : {
    flexDirection : 'row',
    flexWrap : 'wrap'
  },
  header : {
    fontSize : 20,
    color : 'white',
    marginBottom : 20,
    paddingTop : 10,
    paddingHorizontal : 20,
    marginTop : 50,
    fontWeight : 'bold'
  },
  

});
