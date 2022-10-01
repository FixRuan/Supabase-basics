import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function NewContact() {
  const navigation = useNavigation<any>();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar
        translucent={false}
        backgroundColor="#fff"
      />

      <View style={styles.header}>
        <Feather
          onPress={handleGoBack}
          style={{ position: "absolute", left: 10 }}
          name="arrow-left"
          size={30}
        />

        <Text style={styles.headerText}>
          Criar Contato
        </Text>
      </View>

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          keyboardType="default"
          keyboardAppearance="dark"
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          keyboardAppearance="dark"
        />

        <TextInput
          style={styles.input}
          placeholder="Idade"
          keyboardType="numeric"
          keyboardAppearance="dark"
        />

        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
