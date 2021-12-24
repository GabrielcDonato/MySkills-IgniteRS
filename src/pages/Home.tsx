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

interface SkillData {
    id: string;
    name: string;
}


     export function Home(){

         const [newSkill, setNewSkill] = useState('');
         const [mySkills, setMySkills] = useState<SkillData[]>([]);
         //SkillData[] pq é um array no caso mais de uma skill então coloca o vetor/array na frente do skill data pra dizer que é uma lista [].
         const [greetings, setGreeting] = useState('');
         
         //Usar o padrão handle quando for lidar com uma ação do usuario, no caso o usuario irá clicar e vai ocorrer a alteração de estado.

         function handleAddNewSkill(){
            const data = {
                id: String (new Date().getTime()),
                name: newSkill
            }
            setMySkills(oldState => [...oldState, data]);
            // ... 13mins usestate ignite cap 1, 2 conceitos importantes
         }

         function handleRemoveSkill(id: string) {
            setMySkills(oldState => oldState.filter(
               skill => skill.id !== id
            ));
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
        }, [])
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

             <Button 
             title="Add"
             onPress = {handleAddNewSkill}
             />

             <Text style = {[ styles.title, { marginVertical: 50 }, ]} >
                 My Skills
             </Text>

         
              <FlatList
              showsVerticalScrollIndicator={false}
                data={mySkills}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>  (
                    <SkillCard 
                        skill={item.name}
                        onPress={() => handleRemoveSkill(item.id)}
                    />
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

