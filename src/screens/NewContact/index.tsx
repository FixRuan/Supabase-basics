import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import "react-native-get-random-values";
import { v4 as uuidV4 } from "uuid";

import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { supabase } from "../../services/supabase";

export function NewContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const navigation = useNavigation<any>();

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleNewContact() {
    try {
      await supabase.post("/contacts", {
        name,
        email,
        age: Number(age),
      });
    } catch (error) {
      console.error(error.message);
    } finally {
      setName("");
      setEmail("");
      setAge("");
    }
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
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          keyboardAppearance="dark"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Idade"
          keyboardType="numeric"
          keyboardAppearance="dark"
          value={age}
          onChangeText={setAge}
        />

        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={handleNewContact}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
