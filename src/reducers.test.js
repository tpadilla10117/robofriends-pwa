import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
   } from './constants';

import * as reducers from './reducers';

describe('searchRobots', () => {
    const initialStateSearch = {
        searchField: ''
    };

    it('it should return the initial state', () => {
        expect(reducers.searchRobots(undefined, {} )).toEqual( { searchField: ''})
    });

/* With reducers, just give it an input and expect an output: */
    it('should handle CHANGE_SEARCHFIELD', () => {
        expect(reducers.searchRobots(initialStateSearch, {
            type: CHANGE_SEARCHFIELD,
            payload: 'abc'
        })).toEqual({
            searchField: 'abc'
        })
    })
});

describe('The requestRobots reducer:', () => {
    const initialStateRobots = {
        robots: [],
        isPending: false
    };

    it('should return the initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
    });

    it('should handle REQUEST_ROBOTS_PENDING action', () => {
        expect.assertions(1);
        
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_PENDING
        })).toEqual({
            robots: [],
            isPending: true
        })
    });
    
    it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
        expect.assertions(1);

        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: '123',
                name: 'test',
                email: 'test@gmail.com'
            }]
        })).toEqual({
            robots: [{
                id: '123',
                name: 'test',
                email: 'test@gmail.com'
            }],
            isPending: false
            
        })
    });

    /* TODO: Need to do REQUEST_ROBOTS_FAILED, video 290, 13:00 */
})