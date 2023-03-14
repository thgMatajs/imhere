import { View, Text } from "react-native"
import { styles } from "./styles"

export function Header() {
    return (
        <View>
            <Text style={styles.eventName}>
                Nome do evento
            </Text>
            <Text style={styles.eventDate}>
                Data do evento
            </Text>
        </View>
    )
}