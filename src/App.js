import React, { Component } from 'react'
import { Text, View,SafeAreaView,ScrollView } from 'react-native'
import Data from './fetch/Data'
import Display from './Display'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
            data:'',
            isLoading:true
        }
    }
    componentDidMount() {
        this.fetchData()
    }

    fetchData= async()=>{
        const res=await Data()
        this.setState({
            data:res,
            isLoading:false
        })
    }
    render() {
        const {isLoading,data}=this.state
        return (
            <SafeAreaView>
                <Text> Home </Text>
                <ScrollView>
                {!isLoading&&data.map(item=><Display key={item.id} title={item.title}/>)}
                </ScrollView>
            </SafeAreaView>
        )
    }
}
