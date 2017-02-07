import expect from 'expect';
import {createStore} from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Store', () => {
  it('should handle creating courses', () => {
    const store = createStore(rootReducer, initialState);
    const course = {
      id: 'clean-code',
      title: 'Clean Code'
    };
    const course2 = {
      id: 'clean-code2',
      title: 'Clean Code2'
    };
    const courseUpdate = {
      id: 'clean-code',
      title: 'Clean Code3'
    };

    const actions = [
      courseActions.createCourseSuccess(course),
      courseActions.createCourseSuccess(course2),
      courseActions.updateCourseSuccess(courseUpdate)
    ];

    actions.map(action => {store.dispatch(action);});

    const actual = store.getState().courses;
    expect(actual[1].title).toEqual('Clean Code3');
    expect(actual[0].title).toEqual('Clean Code2');
  });
});
