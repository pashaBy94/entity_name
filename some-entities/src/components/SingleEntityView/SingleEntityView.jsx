import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateEntityThunk } from '../../redux/createAction';
import style from './SingleEntityView.module.css';

const SingleEntityView = () => {
    const [name, setName] = useState('');
    const [coordinate, setCoordinate] = useState([]);
    const [labels, setLabels] = useState('');
    const currentEntity = useSelector(state => state.currentEntity);
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentEntity) {
            setName(currentEntity.name);
            setCoordinate(currentEntity.coordinate);
            console.log(currentEntity);
            setLabels(currentEntity?.labels?.join(','));
        }
    }, [currentEntity]);

    const handleUpdate = () => {
        const updatedEntity = {
            ...currentEntity,
            name,
            coordinate,
            labels: labels.split(',').map(label => label.trim()),
        };

        dispatch(updateEntityThunk(updatedEntity.id, updatedEntity));
    };

    return (
        <section className={style.single}>
            <h2>Single Entity View</h2>
            {currentEntity ? (
                <div className={style.single__form}>
                    <div className={style.single__input}>
                        <label>
                            <span>Name: </span>
                            <input
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </label>
                        <label>
                            <span>Coordinate (x, y): </span>
                            <input
                                type="text"
                                value={coordinate}
                                onChange={e =>
                                    setCoordinate(e.target.value.split(',').map(el => +el))
                                }
                            />
                        </label>
                        <label>
                            <span>Labels: </span>
                            <input
                                type="text"
                                value={labels}
                                onChange={e => setLabels(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className={style.single__button}>
                        <button onClick={handleUpdate}>Update Entity</button>
                    </div>
                </div>
            ) : (
                <p>No entity selected</p>
            )}
        </section>
    );
};

export default SingleEntityView;
