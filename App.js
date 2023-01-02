import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";


export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const  [modalIsVisible , setModalIsVisible] =useState(false)

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler()
  }
  
  function startAddGoalHandler(){
    setModalIsVisible(true)
  }

  function endAddGoalHandler(){
    setModalIsVisible(false)
  }
function deleteGoalHandler(id){
  setCourseGoals(currentCourseGoals =>{
   return currentCourseGoals.filter((goal)=> goal.id !==id)
  })
}

  return (
    <View style={styles.container}>
    <Button title="Add New Goal" 
    color="#5e0acc" 
     onPress={startAddGoalHandler}
     />
       <GoalInput onAddGoal={addGoalHandler}
        visible={modalIsVisible}
        onCancel={endAddGoalHandler}
        />
      
     
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              < GoalItem 
              text={itemData.item.text}  
            id={itemData.item.id}
            onDeleteItem={deleteGoalHandler}
            />
            )
              
            
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    flex: 1,
  },
  // inputContainer: {
  //   flex: 1,
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   marginBottom: 24,
  //   borderBottomColor: "#cccccc",
  //   borderBottomWidth: 1,
  // },
  // textInput: {
  //   borderColor: "#cccccc",
  //   borderWidth: 1,
  //   width: "70%",
  //   marginRight: 8,
  //   padding: 8,
  // },

  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e08cc",
    padding: 8,
  },
  goalText: {
    color: "white",
  },
});
