import { useDispatch } from 'react-redux';
import { deleteEntityThunk, loadOnlyEntitieThunk } from '../../redux/createAction';
import style from './ItemEntityView.module.css';
const ItemEntityView = ({ entity }) => {
    const dispatch = useDispatch();

    const handleDelete = entityId => {
        dispatch(deleteEntityThunk(entityId));
    };
    const selectEntities = entityId => {
        dispatch(loadOnlyEntitieThunk(entityId));
    };
    return (
        <li className={style.entityes__item} onClick={() => selectEntities(entity.id)}>
            <p className={style.entity__title}>{entity.name}</p>
            <p>
                x: {entity.coordinate[0]}, y: {entity.coordinate[1]}{' '}
            </p>
            <button
                onClick={ev => {
                    ev.preventDefault();
                    ev.stopPropagation();
                    handleDelete(entity.id);
                }}
                className={style.entityes__btn}
            >
                x
            </button>
        </li>
    );
};

export default ItemEntityView;
