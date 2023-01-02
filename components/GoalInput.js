import { useState } from "react";
import { Button, StyleSheet, TextInput, View,Modal, Image } from "react-native"


function GoalInput(props){
      const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
      }
      function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
      }
    
return(
    <Modal visible={props.visible} animationType="slide">
<View style={styles.inputContainer}>
    <Image source= {require('../assets/logo.png')} style={styles.image} />
<TextInput
    placeholder="Your first Goal"
    style={styles.textInput}
    onChangeText={goalInputHandler}
    value={enteredGoalText}
  />
  <View style={styles.buttonContainer}>
    <View style={styles.button}>
  <Button title="Add Goal" onPress={addGoalHandler} color="#3b31f3"/>
  </View>
  <View style={styles.button}>
  <Button title="Cancel" onPress={props.onCancel} color="#bb000e"/>
  </View>
  </View>
  
</View>
</Modal>
)

}

export default GoalInput

const styles = StyleSheet.create({
    
    inputContainer: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      
      padding:16,
      
      backgroundColor:"#362384"
    },
    textInput: {
      borderColor: "#cccccc",
      borderWidth: 1,
      width: "100%",
      color:"white",
      padding: 8,
    },
    buttonContainer:{
        marginTop:8,
        flexDirection: "row",
    },
    button:{
        width:100,
        marginHorizontal: 8
        
    },
    image:{
        width:150,
        height: 150,
        margin:20
        
    }

}

)