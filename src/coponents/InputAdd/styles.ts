import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    input: {
        flex: 1,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#1F1E25',
        color: '#fff',
        padding: 16,
        paddingStart: 16,
        fontSize: 16,
        marginRight: 8
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31cf67',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonDisabled: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#6b6b6b',
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 36
    }
})