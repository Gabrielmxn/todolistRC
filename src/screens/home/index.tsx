import { FlatList, Text, TextInput, TextInputBase, TouchableOpacity, View } from "react-native";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import { PlusCircle } from "phosphor-react-native";
import { Info } from "../../components/Info";
import React, { useState } from "react";
import { EmptyInfo } from "../../components/EmptyInfo";
import { Task } from "../../components/Task";
import uuid from 'react-native-uuid';

interface Tasks{
  id: string
  description: string
  isConcluid: boolean
}


export function Home(){
  const [tasks, setTasks] = useState<Tasks[]>([])
  const [description, setDescription] = useState('')

  const TASKSCONCLUID = tasks.filter(response => response.isConcluid === true).length

  function handleRemoveTask(id: string){
    const task = tasks.filter(response => response.id !== id)
    setTasks(task)
  }

  function handleAddTask(){
    if(description !== ''){
      const newTasks = {
        id: uuid.v1().toString(),
        description,
        isConcluid: false
      }
      setTasks(state => [...state, newTasks])
      setDescription('')
    }
  }

  function handleCheckTask(id: string){
    const task = tasks.findIndex(response => response.id === id)
    console.log('aqui')
    if(task === -1){
      console.log("Não foi possível encontrar a tarefa")
    }
    const newTasks = [...tasks]
    newTasks[task] = {
      ...tasks[task],
      isConcluid: !tasks[task]?.isConcluid
    }

   


    setTasks(newTasks)
  }
  return(
      <View style={styles.container}>
        <Header />
        <View style={styles.main}>
          <View style={styles.formInput}>
            <TextInput
              style={styles.inputText}
              placeholder="Adicione uma nova tarefa"
              onChangeText={setDescription}
              value={description}
              placeholderTextColor="#808080"
            />
            <TouchableOpacity style={styles.buttonAdd} onPress={handleAddTask}>
                <PlusCircle color="#fff" size={15}/> 
            </TouchableOpacity>
          </View>
         <View style={styles.containerInfoAndList}>
          <View style={styles.containerInfo}>
              <Info title="Criadas" count={tasks.length}/>
              <Info title="Concluídas" count={TASKSCONCLUID}/>
            </View>
            
            <View style={styles.listTask}>
              <FlatList 
              data={tasks}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <Task 
                description={item.description} 
                id={item.id} 
                isConcluid={item.isConcluid} 
                removeItem={() => handleRemoveTask(item.id)}
                checkBox={() => handleCheckTask(item.id)}
                />
              )}
              ListEmptyComponent={() => (<EmptyInfo />)}
              
              />
            </View>
          </View>
        </View>
      </View>
  )
}