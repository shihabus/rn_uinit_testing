import React, { Component } from 'react'
import { Text, View,ScrollView } from 'react-native'
import PropTypes from 'prop-types';
export default class Display extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const {title}=this.props
        return (
            <View style={{paddingVertical:5,borderColor:'red',borderWidth:1}} testID='Display'>
                <Text testID='title'>Item: {title}</Text>
            </View>
        )
    }
}

Display.propTypes={
    title:PropTypes.string
}
