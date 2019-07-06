import React from 'react'
import App from './App'
import { createSerializer } from 'enzyme-to-json';
expect.addSnapshotSerializer(createSerializer({mode:'deep'}))

jest.mock('./fetch/Data')

describe('App', () => {
    it('fetch',(done)=>{
        const wrapper=shallow(<App/>)
        setTimeout(()=>{
            wrapper.update()
            const state=wrapper.instance().state
            expect(state.isLoading).toEqual(false)
            expect(wrapper.find("ScrollView").length).toEqual(0)
            done()
        })
    })
});