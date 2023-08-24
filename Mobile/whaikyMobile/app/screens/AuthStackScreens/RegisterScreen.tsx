import { View, Text, StyleSheet, TextInput, Button,KeyboardAvoidingView } from 'react-native'
import { ActivityIndicator } from 'react-native' 
import React from 'react'
import { useState } from 'react'
import { FIREBASE_AUTH } from '../../../FirebaseConfig'
import { signInWithEmailAndPassword , createUserWithEmailAndPassword} from 'firebase/auth'
import { set } from 'firebase/database'
const RegisterScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const auth = FIREBASE_AUTH;

    const signUp = async () => {
        setLoading(true)
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            console.log(response);
        } catch (error) {
           console.log(error)
        } finally {
            setLoading(false)
        }
    }
  return (
   
    <View style={styles.container}>
        <KeyboardAvoidingView behavior='padding'>
            <Text>RegisterScreen</Text>
            <TextInput style={styles.input} placeholder="email" value={email} onChangeText={text => setEmail(text)} />
            <TextInput style={styles.input} placeholder="password" secureTextEntry={true} value={password} onChangeText={text => setPassword(text)} />
            <Text>{error}</Text>
            { loading ? (<ActivityIndicator size='large' color="#0000ff" />
            ): (<>
                <Button title="Sign Up" onPress={signUp} />
            </>)}
        </KeyboardAvoidingView>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: 200,
        height: 40,
        borderWidth: 1,
        borderColor: 'black'
    }
})