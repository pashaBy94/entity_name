import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadEntitiesThunk } from '../../redux/createAction';
import style from './ListEntityView.module.css';
import ItemEntityView from '../ItemEntityView/ItemEntityView';
const ListEntityView = () => {
    const entities = useSelector(state => state.entities);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadEntitiesThunk());
    }, [dispatch]);
    return (
        <section className={style.list}>
            <h2 className={style.list__title}>Entities List</h2>
            <ul className={style.entityes}>
                {entities.map(entity => (
                    <ItemEntityView entity={entity} key={entity.id} />
                ))}
            </ul>
        </section>
    );
};

export default ListEntityView;
