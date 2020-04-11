import {combineReducers} from 'redux';

import AuthReducer from './AuthReducer';
import ScheduleReducer from './ScheduleReducer';

export default combineReducers({
  scheduleReducer: ScheduleReducer,
  authData: AuthReducer,
});
