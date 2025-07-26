// rnfes
import { StyleSheet, Text, View, ViewComponent} from 'react-native'
import React, { useState } from 'react'
import styles from './Style'
// import CustomText from './Components/CustomText'
import { Button, TextInput } from 'react-native-paper'
import Loading from './Components/Loading'
import SimpleList from './Components/SimpleList'
import TextForm from './Components/TextForm'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App = () => {
  // const [loading,setLoading] = useState(true);
  const [loading,setLoading] = useState(false);
  const [form,setform] = useState(false);
  const [list,setlist] = useState(false);
  
  function showComponent(title){
   if(title=="loading"){
    setlist(false)
    setform(false) 
    // 
    setLoading(true)

    } else if(title=="form"){
       setlist(false)
    setLoading(false)
    // 
      setform(true)
    }  else if(title == "list"){
    setform(false) 
    setLoading(false)
    // 
      setlist(true) 

    }else{
      setLoading(true)
      setform(true)
      setlist(true)
    }

  }

  return (
    <SafeAreaProvider>
    <View style={{flex:1}} >
    <View>
   <Text style={styles.textStyle} >Demo of Component</Text>
    </View>
    <View>
      <Button 
      mode="contained"
      style={[styles.buttons,{backgroundColor:"red"}]}
      textColor='white'
      labelStyle={{fontSize:20}}
      onPress={()=>showComponent('loading')}
      
      >
        Show Loading
      </Button>
      <Button 
      mode="contained"
      style={[styles.buttons,{backgroundColor:"blue"}]}
      textColor='white'
      labelStyle={{fontSize:20}}
       onPress={()=>showComponent('form')}
      >
        Show Form
      </Button>
      <Button 
      mode="contained"
      style={[styles.buttons,{backgroundColor:"green"}]}
      textColor='white'
      labelStyle={{fontSize:20}}
       onPress={()=>showComponent('list')}
      >
        Show Flatlist
      </Button>
      <Button 
      mode="contained"
      style={[styles.buttons,{backgroundColor:"black"}]}
      textColor='white'
      labelStyle={{fontSize:20}}
       onPress={()=>showComponent('')}
      >
       Show All  
      </Button>
    </View>
    <View style={{flex:1}} >
      {loading ? <Loading /> : null}
     {form ?  <TextForm /> :null}
    { list ? <SimpleList /> :''}
    </View>

    </View>
    </SafeAreaProvider>
  )
}

export default App
