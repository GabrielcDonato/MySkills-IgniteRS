import React, { useEffect, useState } from "react"; //useNomeDoHook
import 
    {View,
     Text,
     StyleSheet, 
     TextInput,
     Platform,
     FlatList,
     
    } 
     from "react-native";

import { Button } from "../components/Button";
import SkillCard from "../components/SkillCard";

     export function Home(){

         const [newSkill, setNewSkill] = useState('');
         const [mySkills, setMySkills] = useState([]);
         const [greetings, setGreeting] = useState('');
         
         //Usar o padrão handle quando for lidar com uma ação do usuario, no caso o usuario irá clicar e vai ocorrer a alteração de estado.

         function handleAddNewSkill(){

            setMySkills(oldState => [...oldState, newSkill]);
            // ... 13mins usestate ignite cap 1, 2 conceitos importantes
         }



        useEffect(() => {
            const currentHour = new Date().getHours();

            if(currentHour <12) {
                setGreeting('Good morning');
            } else if(currentHour >= 12 && currentHour <18){
                setGreeting('Good afternoon');
            }else{
                setGreeting('Good night');
            }
        }, [mySkills])
     return(
         <View style = {styles.container} >
             <Text style = {styles.title}>

                Welcome, Rodrigo

             </Text>

             <Text style = {styles.greetings}>
                {greetings}
             </Text>

             <TextInput style = {styles.input}
                        placeholder = "New skill"
                        placeholderTextColor = "#555" 
                        onChangeText = {setNewSkill}      
             />

             <Button onPress = {handleAddNewSkill}/>

             <Text style = {[ styles.title, { marginVertical: 50 }, ]} >
                 My Skills
             </Text>

         
              <FlatList
              showsVerticalScrollIndicator={false}
                data={mySkills}
                keyExtractor={item => item}
                renderItem={({ item }) =>  (
                    <SkillCard skill = {item} />
                )}
              />

                
             

         </View>
     )
 }

 const styles = StyleSheet.create({
     container: {
         flex: 1,
         backgroundColor: '#121015',
         paddingHorizontal: 20,
         paddingVertical: 70,
     },

     title: {
         color: '#fff',
         fontSize: 24,
         fontWeight: 'bold',
     },

     input: {
         backgroundColor: '#1F1E25',
         color: '#fff',
         fontSize: 18,
         padding: Platform.OS === 'ios' ? 15 : 10,
         marginTop: 30,
         borderRadius: 7
     },
     greetings: {
         color: '#fff',

     }

 });

