import React, { Component } from 'react'
import { Text, View,SafeAreaView,ScrollView,TouchableOpacity } from 'react-native'
import Data from './fetch/Data'
import Display from './Display'
import User from './User'
import { connect } from 'react-redux'
import {ChangeTitle} from './store/action'
class App extends Component {
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
            <SafeAreaView testID='SafeAreaView'>
                <Text> Home </Text>
                <Text style={{fontSize: 25,color:'red'}}>{this.props.title}</Text>
                <TouchableOpacity testID='TouchableOpacity' onPress={()=>this.props.ChangeTitle('Man')}>
                    <Text>Click</Text>
                </TouchableOpacity>
                <User/>
                <ScrollView>
                {!isLoading&&data.map(item=><Display key={item.id} title={item.title}/>)}
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const mapStateToProps=({TitleReducer})=>{
    const {title}=TitleReducer
    return {title}
}

export default connect(mapStateToProps,{ChangeTitle})(App);