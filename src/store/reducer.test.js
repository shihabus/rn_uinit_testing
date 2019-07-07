import {types} from './types'
import TitleReducer from './reducer'
describe('Reducer', () => {
    
    it('Should return default state',()=>{
        const newState=TitleReducer(undefined,{})
        expect(newState).toEqual({})
    })

    it('On receiving a valid type',()=>{
        const newState=TitleReducer(undefined,{type:types.TITLE,payload:{title:'Car'}})
        expect(newState).toEqual({title:{title:'Car'}})
    })
});