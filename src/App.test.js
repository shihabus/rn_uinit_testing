import React from 'react'
import App,{mapStateToProps} from './App'
import { createSerializer } from 'enzyme-to-json';
import { findComponent,testStore } from '../Utils/TestUtil'
import { connect } from 'react-redux'

expect.addSnapshotSerializer(createSerializer({mode:'deep'}))

jest.mock('./fetch/Data')

const setUp=(initalStore={})=>{
    const store=testStore(initalStore)
    const wrapper=shallow(<App store={store}/>).childAt(0).dive()
    return wrapper
}
describe('App', () => {

    let wrapper;
    beforeEach(()=>{
        const initialState={
            TitleReducer:{
                title:'tile'
            }
        }
        wrapper=setUp(initialState);
    })
    it('fetch',(done)=>{
        // const wrapper=setUp();
        // console.log(wrapper.debug())
        expect(wrapper.find("Display").length).toEqual(0)
        setTimeout(()=>{
            wrapper.update()
            const state=wrapper.instance().state
            expect(state.isLoading).toEqual(false)
            // findComponent(wrapper,"SafeAreaView")
            expect(findComponent(wrapper,"SafeAreaView").length).toEqual(1)
            done()
        })
    })

    // describe('Button', () => {
    //     let wrapper;
    //     let mockFunc;
    //     beforeEach(()=>{
    //         mockFunc:jest.fn()
    //         const props={
    //             onPress:mockFunc,
    //         }
    //         wrapper=shallow(<TouchableOpacity {...props}/>);
    //     })
    //     console.log('W',wrapper)
    //     it('Render button',()=>{
    //         wrapper.find(Text).first().props().onPress();
    //         // expect(mockFunc.mock.calls.length).toBe(1);
    //         expect(1).toBe(1);
    //     })
    // });
});