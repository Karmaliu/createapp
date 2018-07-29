//整合本页面reducer
import counterReducer from './counterReducer';
import weather from './weather';
const counterR = {
    counterReducer,
    weather
}

export default counterR;