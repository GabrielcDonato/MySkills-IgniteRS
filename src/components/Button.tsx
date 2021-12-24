import React from "react";
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text, 
    StyleSheet,
} from "react-native";

//type ButtonProps = TouchableOpacityProps; aqui eu estava dizendo q o buttonprps so seria igual ao touchabel
// ja aqui ele vai receber o touchable mais oq eu quiser passar.
interface ButtonProps extends TouchableOpacityProps{
    title : string;
}

// para boas praticas era para ser chamado de rest
export function Button({title, ...restoDasPropriedades} : ButtonProps){
    return(
        <TouchableOpacity   
             style = {styles.button}
             activeOpacity = {.7}

             {...restoDasPropriedades}
             >

                 <Text style = {styles.buttonText}> 
                 {title}
                 </Text>

             </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20,

    },

    buttonText : {
       color: '#FFF',
       fontSize: 17,
       fontWeight: 'bold',
       borderRadius: 20,

    },
}) 