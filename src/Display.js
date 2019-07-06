import React, { Component } from 'react'
import { Text, View,ScrollView } from 'react-native'

export default class Display extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const {title}=this.props
        console.log('Title',title)
        return (
            <View style={{paddingVertical:5,borderColor:'red',borderWidth:1}}>
                <Text>Item: {title}</Text>
            </View>
        )
    }
}
