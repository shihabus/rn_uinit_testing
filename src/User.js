import React, { Component } from 'react'
import { Text, View } from 'react-native'
import getUser from './getUser'
export default class User extends Component {
    constructor(props){
        super(props)
        this.state={
            userDetails:null,
            isLoading:true
        }
    }

    componentDidMount() {
        this.fetchUser()
    }

    fetchUser=async ()=>{
        const resp=await getUser()
        this.setState({userDetails:resp,isLoading:false})
    }
    render() {
        const {isLoading,userDetails}=this.state
        if(!isLoading){
            console.log('Result',userDetails.title)
        }
        return (
            <View>
                {
                    !isLoading&&<Text>User:{userDetails.title}</Text>
                }
            </View>
        )
    }
}
