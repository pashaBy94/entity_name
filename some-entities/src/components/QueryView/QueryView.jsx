import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { queryEntitys } from '../../redux/createAction';
import { sortEntities } from '../../utils/helper';
import style from './QueryView.module.css';

const QueryView = () => {
    const [startCoordinate, setStartCoordinate] = useState('');
    const [endCoordinate, setEndCoordinate] = useState('');
    const dispatch = useDispatch();

    const entities = useSelector(state => state.entities);

    const handleQuery = () => {
        const start = (startCoordinate || '0,0').split(',').map(coord => Number(coord.trim()));
        const end = (endCoordinate || '0,0').split(',').map(coord => Number(coord.trim()));
        const filteredEntities = entities.filter(
            entity =>
                entity.coordinate[0] >= start[0] &&
                entity.coordinate[1] >= start[1] &&
                entity.coordinate[0] <= end[0] &&
                entity.coordinate[1] <= end[1],
        );
        const entitys = filteredEntities.length ? filteredEntities : [];
        dispatch(queryEntitys({ entitys, coordinateStart: start, coordinateEnd: end }));
        console.log(sortEntities(filteredEntities));
    };

    useEffect(() => {
        handleQuery();
    }, [entities]);

    return (
        <section className={style.query}>
            <h2>Query View</h2>
            <div className={style.query__input}>
                <label>
                    <span>Start coordinate X, Y: </span>
                    <input
                        type="text"
                        value={startCoordinate}
                        placeholder="start x, start y"
                        onChange={e => setStartCoordinate(e.target.value)}
                    />
                </label>
                <label>
                    <span>End coordinate X, Y: </span>
                    <input
                        type="text"
                        value={endCoordinate}
                        placeholder="end x, end y"
                        onChange={e => setEndCoordinate(e.target.value)}
                    />
                </label>
            </div>
            <div className={style.query__button}>
                <button onClick={handleQuery}>Query Entities</button>
            </div>
        </section>
    );
};

export default QueryView;
