import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ModalComponent from './src/Components/ModalComponent'
import FormComponent from "./src/Components/FormComponent";
import ListComponent from "./src/Components/ListComponent";
import {Button, PaperProvider} from 'react-native-paper';


export default function App() {
  const [selectedId, setSelectedId] = useState()
  const [list, setList] = useState(sampleGoals)
  const [modalVisible, setModalVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  const deleteHandler = ()=>{
    setList(list.filter(item=> item.id != selectedId))
    setModalVisible(false)
  }
  const modalHandler = ()=>{
    setModalVisible(!modalVisible)
  }
  const idHandler = function (index){
    setSelectedId(index)
    setModalVisible(true)
  }
  const editHandler = (id)=>{
    if(!id){return;}
    const item = list.find(el=>el.id == id)
    if (!item){return;}
    setFormVisible(true)
  }
  const addItem = (e)=>{
    let id = Date.now()
    setList( [{action:e, id},...list])
    setFormVisible(false)
  }
  return (
  <PaperProvider>
    <View style={styles.container}>
      <ListComponent  list={list} idHandler={idHandler}/>
        <View style={styles.formContainer}>
            {formVisible ?
                <FormComponent addItem={addItem} modificationFn={editHandler}/> :
                <Button mode="contained" onPress={()=>setFormVisible(!formVisible)}>Add</Button>}
        </View>
      <ModalComponent isShowed={modalVisible} modalHandler={modalHandler} actionHandler={deleteHandler}/>
    </View>
  </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:6,
    padding:5
  },
  formContainer:{
    justifyContent:'center',
    alignItems:'center',
    flex:0.6
    },
});
const sampleGoals = [
    {
      id:1,
      action:'Faire les courses'
    },
    {
      id:2,
      action:'Aller à la salle de sport 3 fois par semaine'
    },
    {
      id:3,
      action:'Monter à plus de 5000m d altitude'
    },
    {
      id:4,
      action:'Monter à plus de 5000m d altitude'
    },
    {
      id:5,
      action:'Acheter mon premier appartement'
    },
    {
      id:6,
      action:'Perdre 5 kgs'
    },
    {
      id:7,
      action:'Gagner en productivité'
    },
    {
      id:8,
      action:'Apprendre un nouveau langage'
    },
    {
      id:9,
      action:'Faire une mission en freelance'
    },
    {
      id:10,
      action:'Organiser un meetup autour de la tech'
    },
    {
      id:11,
      action:'Organiser un meetup autour de la tech'
    },
    {
      id:12,
      action:'Faire un triathlon'
    },
];