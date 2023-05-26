import React from "react";
import { View, Text, Pressable, TextInput, TouchableOpacity} from "react-native"
import styles from "./style";

export default function Form(){

        return(
    
            <Pressable style={styles.conteiner}>

                <View >
                    <Text style={styles.caixaTexto}> nome </Text>
                    <TextInput style={styles.Texto} placeholder=" digite seu nome " keyboardType="numeric"/>
                    

                    <Text style={styles.caixaTexto}> numero </Text>
                    <TextInput style={styles.Texto}  placeholder= "digite seu numero de telefone " keyboardType="numeric"/>
                    


                    <Text style={styles.caixaTexto}> emaiL </Text>
                    <TextInput style={styles.Texto}  placeholder=" digite seu email " keyboardType="numeric"/>

                        <TouchableOpacity style={styles.caixaBotao}>
                        <Text style={styles.botao}>cadastrar</Text>
                        </TouchableOpacity>

                </View>


               

            </Pressable>

        )
}