import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEntityThunk } from '../../redux/createAction';
import style from './CreatorEntityView.module.css';

const CreatorEntityView = () => {
    const [name, setName] = useState('');
    const [coordinateX, setCoordinateX] = useState('');
    const [coordinateY, setCoordinateY] = useState('');
    const [labels, setLabels] = useState('');
    const dispatch = useDispatch();

    const handleCreate = () => {
        if (name && coordinateX && coordinateY && labels) {
            dispatch(
                addEntityThunk({
                    name,
                    coordinate: [coordinateX, coordinateY],
                    labels: labels.split(',').map(label => label.trim()),
                }),
            );
            setName('');
            setCoordinateX('');
            setCoordinateY('');
            setLabels('');
        }
    };

    return (
        <section className={style.creater}>
            <h2>Create Entity</h2>
            <div className={style.creater__input}>
                <label>
                    <input
                        type="text"
                        placeholder="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </label>
                <label>
                    <input
                        type="number"
                        placeholder="x"
                        value={coordinateX}
                        onChange={e => setCoordinateX(e.target.value)}
                    />
                </label>
                <label>
                    <input
                        type="number"
                        placeholder="y"
                        value={coordinateY}
                        onChange={e => setCoordinateY(e.target.value)}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        placeholder="labels"
                        value={labels}
                        onChange={e => setLabels(e.target.value)}
                    />
                </label>
            </div>
            <div className={style.creater__button}>
                <button onClick={handleCreate}>Create Entity</button>
            </div>
        </section>
    );
};

export default CreatorEntityView;
