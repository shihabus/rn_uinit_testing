import moxios from 'moxios'
import {testStore} from '../../Utils/TestUtil'
import {ChangeTitle} from '../store/action'

describe('fetchpost actions', () => {
    beforeEach(()=>{
        moxios.install()
    })

    afterEach(()=>{
        moxios.uninstall()
    })

    test('Store is update',()=>{
        const expectedStore={}
        const store=testStore();
        moxios.wait(()=>{
            const request=moxios.requests.mostRecent();
            request.respondWith({
                status:200,
                response:expectedStore
            })
        })

        return store.dispatch(ChangeTitle())
        .then(()=>{
            const newState=store.getState()
            expect(newState.title).toBe(expectedStore)

        })
    })
});