const initialState = {
    entities: [],
    currentEntity: null,
    queryEntitys: null,
    coordinateStart: [0, 0],
    coordinateEnd: [0, 0],
};

const entitiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_ENTITIES':
            return {
                ...state,
                entities: action.payload,
            };
        case 'LOAD_ONLY_ENTITIES':
            return {
                ...state,
                currentEntity: action.payload,
            };
        case 'ADD_ENTITY':
            return {
                ...state,
                entities: [...state.entities, action.payload],
            };
        case 'UPDATE_ENTITY':
            return {
                ...state,
                entities: state.entities.map(entity =>
                    entity.id === action.payload.entityId ? action.payload.entity : entity,
                ),
                currentEntity: null,
            };
        case 'DELETE_ENTITY':
            let entities = state.entities.filter(entity => entity.id !== action.payload);
            return { ...state, entities };
        case 'QUERY_ENTITY':
            console.log(action.payload);
            return {
                ...state,
                coordinateStart: action.payload.coordinateStart,
                coordinateEnd: action.payload.coordinateEnd,
                queryEntitys: action.payload.entitys,
            };
        default:
            return state;
    }
};

export default entitiesReducer;
