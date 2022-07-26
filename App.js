/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { View,Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import MHButton from './components/button';
import styling from './style'
import LinearGradient from 'react-native-linear-gradient';
import MHInput from './components/input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import back from './components/images/background2.jpg'




const App= ()=> {
  const [text,setText] = useState()
  const [item,setItem] = useState('')
  const [list,setList] = useState([])
  const addtodo = ()=>{
    setList([...list,item])
  }
  const login = ()=>{
    console.log("Log In successfully")
  }
  return (
    <>

      {/* <LinearGradient colors={['#023e7d','#001845']} style={[{flex: 1},style.main]}>
        <View style={{flex:1,justifyContent: "center"}}>
          <Text style={{textAlign: 'center',fontSize:50,color: "white"}}>HH</Text>
          <Text style={{color: "white",textAlign:"center"}}>Hafiz Huzaifa</Text>
        </View>
        <View style={{flex: .5,alignItems: "center"}}>
          <Text style={{fontSize: 15,color:"white",padding: 6}}>Member Login {<Icon name="person-outline" />}</Text>
          <MHInput label={`Enter Email`} color={"#e8eddf"} backgroundColor={"#333533"} onChangeText={(e)=>setText({...text,email: e})} borderRadius={20} paddingLeft={20} textSize={15} width={"80%"} />
          <MHInput label={"Enter Password"} color={"#e8eddf"} backgroundColor={"#333533"} onChangeText={(e)=>setText({...text,password: e})} borderRadius={20} paddingLeft={20} textSize={15} width={"80%"} />
          <MHButton margin={10} label={"Log In"} color={'white'} backgroundColor={"#0353a4"} borderRadius={20} onPress={login} padding={6} textSize={20} width={"80%"} />
        </View>

      </LinearGradient> */}

      {/* <LinearGradient colors={['#7b2cbf','#3a0ca3','#a663cc']} style={{flex: 1,borderBottomLeftRadius: 300}}>
        <View style={{flex:0.4,justifyContent: "center",alignItems: "center"}}>
          <Text style={{color: "white"}}>{<Icon size={90} name='account-circle' />}</Text>
          <Text style={{color: "white",textAlign:"center"}}>Hafiz Huzaifa</Text>
        </View>
        <View style={{flex: 1,alignItems: "center"}}>
          <MHInput label={`Enter Email`} color={"#e8eddf"} borderBottomColor={"white"} borderBottomWidth={2} onChangeText={(e)=>setText({...text,email: e})} textSize={15} width={"80%"} />
          <MHInput label={"Enter Password"} color={"#e8eddf"} borderBottomColor={"white"} borderBottomWidth={2} onChangeText={(e)=>setText({...text,password: e})} textSize={15} width={"80%"} />
          <MHButton margin={10} label={"Log In"}  backgroundColor={"white"} borderRadius={20} onPress={login} padding={12} textSize={15} width={"50%"} />
          <Text style={{color: 'white'}}>You new here ?</Text>
        </View>

      </LinearGradient>  */}


      
      {/* <ImageBackground  source={back}  style={{flex: 1,borderBottomLeftRadius: 300}}>
        <View style={{flex:0.3,justifyContent: "center"}}>
          <Text style={{color: "#6daaf2",paddingLeft: 20,fontSize: 30,fontWeight: "bold"}}>Hafiz Huzaifa</Text>
        </View>
        <View style={{flex: 1,paddingLeft: 6}}>
          <View style={{marginBottom: 30}}>
            <MHInput label={`Enter Email / User name`} color={"lightgray"} borderBottomColor={"lightgray"} borderBottomWidth={2} onChangeText={(e)=>setText({...text,email: e})} textSize={15} width={"60%"} />
          </View>
          <View style={{marginBottom: 40}}>
            <MHInput label={"Enter Password"} color={"lightgray"} borderBottomColor={"lightgray"} borderBottomWidth={2} onChangeText={(e)=>setText({...text,password: e})} textSize={15} width={"60%"} />
          </View>
          <MHButton margin={10} label={"Log In"}  backgroundColor={"white"} borderRadius={20} onPress={login} padding={20} textSize={15} width={"80%"} />
        </View>

      </ImageBackground> */}

      <LinearGradient colors={['#b5179e','#3a0ca3','#3a0ca3']} style={{flex: 1}}>
        <View style={{flex:0.4,justifyContent: 'flex-end',alignItems: "center"}}>
          <Text style={{color: "lightgray",textAlign:"center",fontSize: 35}}>Member LogIn</Text>
        </View>
        <View style={{flex: 1,paddingTop: 45 ,alignItems: "center"}}>
          <View style={{flexDirection: 'row',backgroundColor: 'rgba(52, 52, 52, 0.2)',marginBottom: 10,width: "80%",borderTopColor: '#4361ee',borderBottomColor: '#b5179e',borderBottomWidth: 1,borderTopWidth: 1}}>
            <Text style={{alignItems: 'center',backgroundColor: 'rgba(52, 52, 52, 0.4)',padding: 10}}>{<Icon color={'white'} size={40} name='group' />}</Text>
            <MHInput label={`LogIn`} color={"#e8eddf"} onChangeText={(e)=>setText({...text,email: e})} textSize={23}  />
          </View>
          <View  style={{flexDirection: 'row',backgroundColor: 'rgba(52, 52, 52, 0.2)',marginBottom: 5,width: '80%',borderTopColor: '#4361ee',borderBottomColor: '#b5179e',borderBottomWidth: 1,borderTopWidth: 1}}>
          <Text style={{alignItems: 'center',backgroundColor: 'rgba(52, 52, 52, 0.4)',padding: 10}}>{<Icon color={'white'} size={40} name='https' />}</Text>
            <MHInput label={"Password"} color={"#e8eddf"} onChangeText={(e)=>setText({...text,password: e})} textSize={23}  />
          </View>
          <View style={{flexDirection: 'row',alignItems: 'center',marginTop:10}}>
          <View style={{flex: 0.4,borderTopColor: '#4361ee',alignItems:'center',marginEnd: 20,borderBottomColor: '#b5179e',borderBottomWidth: 1,borderTopWidth: 1}}>
            <MHButton label={"Log In"}  color={'white'}  backgroundColor={'rgba(52, 52, 52, 0.2)'}  onPress={login} padding={15} textSize={25} width={"100%"} />
          </View>
          <View style={{flex: 0.4,borderTopColor: '#4361ee',alignItems:'center',borderBottomColor: '#b5179e',borderBottomWidth: 1,borderTopWidth: 1}}>
            <MHButton label={"Register"}  color={'white'}  backgroundColor={'rgba(52, 52, 52, 0.2)'}  onPress={login} padding={15} textSize={25} width={"100%"} />
          </View>
          </View>
        </View>

      </LinearGradient>

      {/* <View style={{flex: 1,justifyContent: 'center',backgroundColor: '#f4f1de'}}>
        <View  style={{flex: .7,justifyContent: 'center',backgroundColor: 'black',borderColor: 'red',borderWidth: 2}}>
        <View style={{flex:0.4,justifyContent: 'flex-end',alignItems: "center"}}>
          <Text style={{color: "lightgray",textAlign:"center",fontSize: 35}}>Member LogIn</Text>
        </View>
        <View style={{flex: 1,paddingTop: 45 ,alignItems: "center",justifyContent: 'center'}}>
          <View style={{flexDirection: 'row',backgroundColor: 'white',marginBottom: 10,width: "85%",borderTopColor: '#4361ee',borderBottomColor: '#b5179e',borderBottomWidth: 1,borderTopWidth: 1}}>
            <Text style={{alignItems: 'center',backgroundColor: '#2d00f7',padding: 10}}>{<Icon color={'white'} size={40} name='group' />}</Text>
            <MHInput label={`LogIn`} color={'gray'} onChangeText={(e)=>setText({...text,email: e})} textSize={23}  />
          </View>
          <View  style={{flexDirection: 'row',backgroundColor: 'white',marginBottom: 5,width: '85%',borderTopColor: '#4361ee',borderBottomColor: '#b5179e',borderBottomWidth: 1,borderTopWidth: 1}}>
          <Text style={{alignItems: 'center',backgroundColor: '#2d00f7',padding: 10}}>{<Icon color={'white'} size={40} name='https' />}</Text>
            <MHInput label={"Password"} color={'gray'} onChangeText={(e)=>setText({...text,password: e})} textSize={23}  />
          </View>
          <View style={{flexDirection: 'row',width: '85%',justifyContent: 'space-between',paddingBottom: 10,paddingTop: 10}}>
            <Text style={{color: 'white'}}>Remember me</Text>
            <Text style={{color: 'white',textDecorationLine: "underline",}}>Forgot password ?</Text>
          </View>
          <View style={{flexDirection: 'row',alignItems: 'center',marginTop:10}}>
          <View style={{flex: 0.85,borderColor: '#4361ee',alignItems:'center',borderWidth: 1}}>
            <MHButton label={"Log In"}  color={'white'}  backgroundColor={'#2d00f7'}  onPress={login} padding={15} textSize={25} width={"100%"} />
          </View>
          </View>
        </View>

        </View>

      </View> */}

      {/* ================================ Todo ========================================= */}


        {/* <View style={{flex: 1,justifyContent: 'space-between',backgroundColor: '#f4f1de'}}>
          <View style={{flex: 0.2,justifyContent: 'center'}}>
            <View style={{justifyContent: 'center'}}>
                <Text style={{fontSize: 30,fontWeight: 'bold',textAlign: 'center'}}>Todo App</Text>
            </View>
          </View>
          <ScrollView style={{flex: 1,}}>
            {list.map((e,i)=>{
              return<View key={i} style={{flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',margin: 5,marginLeft: 20,marginRight: 20,backgroundColor: 'white',shadowColor:'lightgray',shadowOffset: {width: 0,height: 6,},shadowOpacity: 0.39,shadowRadius: 8.30,}}>
                <View>
                  <Text style={{color: 'black',padding: 10,fontSize: 15}}><Icon name='fiber-manual-record' /> {e}</Text>
                </View>
                <View style={{flexDirection: 'row',marginRight:15}}>
                <View style={{paddingRight: 7}}>
                <MHButton label={<Icon size={20} name={'edit'} />} margin={8} borderRadius={10} color={'white'}  backgroundColor={'#2d00f7'}  textSize={25} width={'100%'} />
              </View>
              <View>
                <MHButton label={<Icon size={20} name={'delete-outline'} />} margin={8} borderRadius={10} color={'white'}  backgroundColor={'red'}  onPress={()=>list.splice(i, 1)}  textSize={25} width={'100%'} />
              </View>
                </View>

              </View>
            })}
          </ScrollView>
          <View style={{flex: 0.2,justifyContent: 'center'}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginRight: 10}}>
                <MHInput label={"Add your new todo"} width={'100%'} paddingLeft={20} color={'gray'} onChangeText={(e)=>setItem(e)} textSize={23} borderWidth={2} borderColor={'gray'}  />
              </View>
              <View>
                <MHButton label={<Icon size={20} name={'add'} />} margin={8} borderRadius={10} color={'white'}  backgroundColor={'#2d00f7'}  onPress={addtodo} padding={19} textSize={25} width={'100%'} />
              </View>
            </View>
          </View>
        </View> */}

      
    </>
  );
}
const style = StyleSheet.create({styling})
export default App;