import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    justifyContent: "center",
    padding: 16,
    marginBottom: 16
  },
  headerText: {
    fontSize: 22,
    color: "#0f1111",
    fontWeight: "bold"
  },
  container: {
    paddingHorizontal: 16,
  },
  input: {
    height: 56,
    borderRadius: 6,
    marginBottom: 6,
    borderBottomWidth: 1
  },
  button: {
    height: 56,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2E2C2F",
    marginTop: 16,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff"
  }
});

export { styles };
