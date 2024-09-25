import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ListCard from '../components/ListCard';

const ListScreen = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [plants, setPlants] = useState([]);

  const getPlants = async () => {
    const url = 'https://create.blinkapi.io/api/eSphKNzwb9EJBt6GBjKx7Q';
    try {
      setIsLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log('json');
      setPlants(json);
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPlants();
  }, [props?.navigation]);

  const renderItem = ({item}) => {
    return <ListCard plant={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={plants}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flexGrow: 1, padding: 10},
});

export default ListScreen;
