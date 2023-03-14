import React, { useState } from "react"
import { View, TextInput, TouchableOpacity, Text, Keyboard } from "react-native"
import { styles } from "./styles"

type Props = {
    addParticipant: (text: string) => void
}

export function InputAdd({ addParticipant }: Props) {
    const [participantName, setParticipantName] = useState<string>("")

    const onChangeText = (text: string) => {
        setParticipantName(text)
    }
    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Digite o nome do evento"
                placeholderTextColor="#999"
                onChangeText={onChangeText}
                value={participantName}
            />
            <TouchableOpacity
                style={participantName.trim() === "" ? styles.buttonDisabled : styles.button}
                onPress={() => {
                    addParticipant(participantName)
                    setParticipantName("")
                    Keyboard.dismiss()
                }
                }
                disabled={participantName.trim() === ""}
            >
                <Text style={styles.buttonText}>
                    +
                </Text>
            </TouchableOpacity>
        </View>
    )
}