import React from "react";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { View, Image, TouchableOpacity, Text, Linking } from "react-native";
import { Feather } from "@expo/vector-icons";
import * as MailComposer from "expo-mail-composer";

import { RootStackParamList } from "../../routes";
import Incident from "../../models/Incident";

import logoImg from "../../assets/logo.png";
import styles from "./styles";

export default function Details() {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RootStackParamList, "Details">>();
  const incident = route.params.incident;
  const message = `Olá ${
    incident.NGO?.name
  }, estou entrando em contato pois gostaria de ajudar no caso "${
    incident.title
  }" com o valor de ${Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(incident.value)}`;

  const navigateBack = () => {
    navigation.goBack();
  };

  const sendMail = () => {
    const recipients = [];

    if (incident.NGO?.email) recipients.push(incident.NGO?.email);

    MailComposer.composeAsync({
      subject: `Hero of the case: ${incident.title}`,
      recipients,
      body: message
    });
  };

  const sendWhatsApp = () => {
    Linking.openURL(
      `whatsapp://send?phone=${incident.NGO?.whatsapp}&text=${message}`
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e82041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>NGO:</Text>
        <Text style={styles.incidentValue}>
          {incident.NGO?.name} from {incident.NGO?.city}/{incident.NGO?.uf}
        </Text>

        <Text style={styles.incidentProperty}>CASE:</Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>

        <Text style={styles.incidentProperty}>VALUE:</Text>
        <Text style={styles.incidentValue}>
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
          }).format(incident.value)}
        </Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Save the day!</Text>
        <Text style={styles.heroTitle}>Be the hero of this case.</Text>

        <Text style={styles.heroDescription}>Contact</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
