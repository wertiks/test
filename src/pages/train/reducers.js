import TRAIN_TEST from './actions';

const initialState = {
    test: ''
};

// reducer - это фукнция, которая возвращает новые объекты
function trainReducer(state = initialState, action) {

    switch (action.type){
        case TRAIN_TEST:
            return Object.assign({},state, {
                test: 'test'
            });
        default:
            return state;
    }

}

const TrainReducer = {
    train: trainReducer
};

export default TrainReducer;