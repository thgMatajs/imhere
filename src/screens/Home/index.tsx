import React, { useState } from "react"

import { View, Text, FlatList, Alert } from "react-native";

import { Header } from "../../coponents/Header";
import { Participant } from "../../coponents/Participant";
import { InputAdd } from "../../coponents/InputAdd";

import { styles } from "./styles";


export function Home() {
    const [participants, setParticipants] = useState<string[]>([]);

    function handleParticipantAdd(name: string) {
        if (participants.includes(name)) {
            return Alert.alert(
                "Participante ja existe!",
                `Participante ${name} ja esta cadastrado em sua lista.`)
        }
        setParticipants(currentState => [...currentState, name])
    }

    function handleParticipantRemove(name: string) {
        Alert.alert(
            "Remover participante",
            `Tem certeza que deseja remover participante ${name}??`,
            [
                {
                    text: "Sim",
                    onPress: () => {
                        setParticipants(currentState => currentState.filter(p => p !== name))
                    }
                },
                {
                    text: "Cancelar",
                    style: 'cancel'
                }
            ]
        )
    }

    return (
        <View style={styles.container}>
            <Header />

            <InputAdd addParticipant={(name: string) => handleParticipantAdd(name)} />

            <FlatList
                data={participants}
                keyExtractor={item => item}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)} />
                )}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Nenhum participante cadastrado!!
                    </Text>
                )}
            />


        </View>
    )
}