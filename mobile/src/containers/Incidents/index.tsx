import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import api from "../../services/api";

import Incident from "../../models/Incident";

import logoImg from "../../assets/logo.png";
import styles from "./styles";

export default function Incidents() {
  const navigation = useNavigation();
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigateToDetails = (incident: Incident) => {
    navigation.navigate("Details", { incident });
  };

  const fetchIncidents = async () => {
    if (loading || (total > 0 && incidents.length === total)) return;

    setLoading(true);
    const data = (await api.get("ngos/incidents", { params: { page } })).data;
    setIncidents([...incidents, ...data.rows]);
    setTotal(data.count);
    setPage(page + 1);
    setLoading(false);
  };

  useEffect(() => {
    fetchIncidents();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total of <Text style={styles.headerTextBold}>{total} cases.</Text>
        </Text>
      </View>

      <Text style={styles.title}>Be welcome!</Text>
      <Text style={styles.description}>
        Choose one of the cases below and save the day!
      </Text>

      <FlatList
        style={styles.incidentList}
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        // showsVerticalScrollIndicator={false}
        onEndReached={fetchIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>NGO:</Text>
            <Text style={styles.incidentValue}>{incident.NGO?.name}</Text>

            <Text style={styles.incidentProperty}>CASE:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>VALUE:</Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
              }).format(incident.value)}
            </Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetails(incident)}
            >
              <Text style={styles.detailsButtonText}>See more details</Text>
              <Feather name="arrow-right" size={16} color="#e02041"></Feather>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
