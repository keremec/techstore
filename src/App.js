import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import Card from "./components/Card";
import store_items from "./data/store_items.json";

const App = () => {
  return (
    <SafeAreaView style={styles.safe_container}>
      <View>
        <Text style={styles.header_text}>Techstore</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={<View>
            <TextInput
              style={styles.search_container}
              placeholder="Search..."
            />
          </View>}
          keyExtractor={item => item.id}
          numColumns={2}
          data={store_items}
          renderItem={({item}) => <Card card={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe_container: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    margin: 10,
  },
  header_text: {
    color: "purple",
    fontSize: 40,
    textAlign: "center",
  },
  search_container: {
    backgroundColor: "white",
    margin: 20,
    borderRadius: 10,
  },
});

export default App;
