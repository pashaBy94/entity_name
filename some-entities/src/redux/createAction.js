import { fetchEntities, createEntity, editEntity, removeEntity, getEntitie } from '../api/api';

export const queryEntitys = ({ entitys, coordinateStart, coordinateEnd }) => ({
    type: 'QUERY_ENTITY',
    payload: { entitys, coordinateStart, coordinateEnd },
});

export const loadEntitiesThunk = () => {
    return async dispatch => {
        try {
            const entities = await fetchEntities();
            dispatch({ type: 'LOAD_ENTITIES', payload: entities });
        } catch (error) {}
    };
};
export const loadOnlyEntitieThunk = entityId => {
    return async dispatch => {
        try {
            const entities = await getEntitie(entityId);
            dispatch({ type: 'LOAD_ONLY_ENTITIES', payload: entities });
        } catch (error) {}
    };
};

export const addEntityThunk = entity => {
    return async dispatch => {
        try {
            const newEntity = await createEntity(entity);
            dispatch({ type: 'ADD_ENTITY', payload: newEntity });
        } catch (error) {}
    };
};

export const updateEntityThunk = (entityId, updatedEntity) => {
    return async dispatch => {
        try {
            const entity = await editEntity(entityId, updatedEntity);
            dispatch({ type: 'UPDATE_ENTITY', payload: { entityId, entity } });
        } catch (error) {}
    };
};

export const deleteEntityThunk = entityId => {
    return async dispatch => {
        try {
            await removeEntity(entityId);
            dispatch({ type: 'DELETE_ENTITY', payload: entityId });
        } catch (error) {}
    };
};
