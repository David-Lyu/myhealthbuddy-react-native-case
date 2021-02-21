import React, { useState } from "react";
import { TextInput } from "react-native";
import { View, Text, StyleSheet } from "reactNative";

const ConditionSearch = (props) => {
  //state
  const [conditionSearchTerm, setConditionSearchTerm] = useState("");
  const [conditionsReturned, setConditionsReturned] = useState(0);
  const [selectedConditions, setSelectedConditions] = useState(null);
  const [selectedSymptoms, setSelectedSymptoms] = useState(null);
  const [results, setResults] = useState(null);

  const callConditions = () => {
    //axios or fetch call haven't decided on which to use
    // `https://my-healthbudnpdy.herokuapp.com/api/v1/conditions/search/${this.state.conditionSearchTerm}?limit=5`
    // state changing for conditionsReturned, and results
    // create a new array and put data.data.slice(0,10) < --- why?
  };

  const clicked = (condition, conditionSymptoms) => {
    //states changing for conditionSerachTerm, selectedCondition, selectedSymptoms
  };

  //might use with useEffect?
  const onInputChange = (event) => {
    //change state for conditionSearchTerm = event.target.value.trim().toLowerCase()
    //checks to see if conditionSearchTerm is empty reset to null
    //checks to see if selectedCondition is not empty then set selectedCondition to null and selectedSymtoms to null
    //calls callConditions
  };

  const videoSearchOnClick = (condition) => {
    //props.returnConditionToLog(selectedCondition, selectedSymptoms)
  };

  return (
    <View>
      <TextInput
        placeholder="Search Conditions..."
        value={conditionSearchTerm}
        onChange={onInputChange}
      />
    </View>
  );
};

export default ConditionSearch;
