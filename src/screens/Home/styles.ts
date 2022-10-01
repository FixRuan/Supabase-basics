import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#191919",
    marginBottom: 8,
    marginHorizontal: 16,
    padding: 8,
    borderRadius: 12
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 18,
    position: "relative"
  },
  headerText: {
    fontSize: 22,
    color: "#0f1111",
    fontWeight: "bold"
  },
  newUser: {
    position: "absolute",
    right: 16
  },
  userHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    color: "#fff",
    fontSize: 22
  },
  email: {
    color: "#ddd",
    fontSize: 18,
  },
  age: {
    color: "red",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 12
  }
});

export { styles };
