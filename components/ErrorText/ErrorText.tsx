import { StyleSheet, Text } from 'react-native';

export default function ErrorText({error}: {error: string}) {
  return <Text style={styles.errorText}>{error}</Text>
}

const styles = StyleSheet.create({
    errorText: {
        color: "red",
        fontSize: 15,
        textAlign: "left"
    }
});