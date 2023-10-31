import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const MessageListScreen = () => {
  const navigation = useNavigation();
  const messages = [
    {
      id: "1",
      image: require("../assets/user1.jpeg"),
      name: "John Doe",
      message: "Hello there!",
      date: "2023-09-14",
      time: "15:00:00",
    },
    {
      id: "2",
      image: require("../assets/user2.jpeg"),
      name: "David Smith",
      message: "Hi, how are you?",
      date: "2023-09-14",
      time: "15:15:00",
    },
    {
      id: "3",
      image: require("../assets/user3.jpeg"),
      name: "Michael Johnson",
      message: "Good morning!",
      date: "2023-09-14",
      time: "16:30:00",
    },
    {
      id: "4",
      image: require("../assets/user4.jpeg"),
      name: "Bob Anderson",
      message: "What are your plans for today?",
      date: "2023-09-14",
      time: "18:45:00",
    },
    {
      id: "5",
      image: require("../assets/user5.jpeg"),
      name: "James Brown",
      message: "I'm looking forward to the weekend!",
      date: "2023-09-14",
      time: "20:20:00",
    },
    {
      id: "6",
      image: require("../assets/user6.jpeg"),
      name: "William Clark",
      message: "How's the weather today?",
      date: "2023-09-15",
      time: "09:30:00",
    },
    {
      id: "7",
      image: require("../assets/user7.jpeg"),
      name: "Daniel White",
      message: "I'm doing great, thanks!",
      date: "2023-09-15",
      time: "10:15:00",
    },
    {
      id: "8",
      image: require("../assets/user8.jpeg"),
      name: "Thomas Lee",
      message: "Any plans for the evening?",
      date: "2023-09-15",
      time: "17:20:00",
    },
    {
      id: "9",
      image: require("../assets/user9.jpeg"),
      name: "Joseph Wilson",
      message: "I'm going to a movie tonight.",
      date: "2023-09-15",
      time: "19:45:00",
    },
    {
      id: "10",
      image: require("../assets/user10.jpeg"),
      name: "Charles Harris",
      message: "Sounds fun! Enjoy the movie.",
      date: "2023-09-15",
      time: "20:30:00",
    },
  ];

  const handlePress = (item) => {
    const { image, name, message, date, time } = item;
    navigation.navigate("MessageDetails", { image, name, message, date, time });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Chat Messages</Text>
      </View>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.messageContainer}
            onPress={() => {
              handlePress(item);
            }}
          >
            <Image style={styles.userImage} source={item.image} />
            <View style={styles.messageContent}>
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.userMessage}>{item.message}</Text>
            </View>
            <View style={styles.dateTime}>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
  },
  header: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
  },
  messageContainer: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  userImage: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    borderColor: "#600EE6",
    borderWidth: 2,
  },
  messageContent: {
    flex: 1,
    marginLeft: 16,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },
  userMessage: {
    fontSize: 16,
    color: "#555555",
  },
  dateTime: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  date: {
    fontSize: 14,
    color: "#777777",
  },
  time: {
    fontSize: 14,
    color: "#777777",
  },
});

export default MessageListScreen;