import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import { StatusBar } from "expo-status-bar";

interface UserProps {
  id: string,
  name: string,
  email: string,
  age: number,
}

export function Home() {
  const navigation = useNavigation<any>();

  const [users, setUsers] = useState<UserProps[]>([
    {
      id: "1",
      name: "Ruan Pablo",
      email: "ruangoio01@gmail.com",
      age: 18
    },
    {
      id: "2",
      name: "Ruan Pablo",
      email: "ruangoio01@gmail.com",
      age: 18
    },
    {
      id: "3",
      name: "Ruan Pablo",
      email: "ruangoio01@gmail.com",
      age: 18
    },
  ]);

  function goToNewContact() {
    navigation.navigate("NewContact");
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar translucent={false} backgroundColor="#fff" />

      <View style={styles.header}>
        <Text style={styles.headerText}>Usuários</Text>
        <TouchableOpacity onPress={goToNewContact} style={styles.newUser}>
          <Text>Novo</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={users}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        renderItem={({ item }) => (
          <View style={styles.container} key={item.id}>
            <View style={styles.userHeader}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.age}>{item.age}</Text>
            </View>

            <Text style={styles.email}>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
}
