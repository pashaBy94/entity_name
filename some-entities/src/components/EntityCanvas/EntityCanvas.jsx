import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import style from './EntityCanvas.module.css';

const EntityCanvas = () => {
    const entities = useSelector(state => state.entities);
    const coordinateStart = useSelector(state => state.coordinateStart);
    const coordinateEnd = useSelector(state => state.coordinateEnd);
    const queryEntitys = useSelector(state => state.queryEntitys);
    const canvasRef = useRef(null);

    useEffect(() => {
        const koef = 30;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.strokeStyle = 'gray';
        ctx.moveTo(centerX + coordinateStart[0] * koef, centerY - coordinateStart[1] * koef);
        ctx.lineTo(centerX + coordinateStart[0] * koef, centerY - coordinateEnd[1] * koef);
        ctx.lineTo(centerX + coordinateEnd[0] * koef, centerY - coordinateEnd[1] * koef);
        ctx.lineTo(centerX + coordinateEnd[0] * koef, centerY - coordinateStart[1] * koef);
        ctx.lineTo(centerX + coordinateStart[0] * koef, centerY - coordinateStart[1] * koef);
        ctx.stroke();
        ctx.closePath();
        ctx.strokeStyle = 'black';

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(centerX + 250, centerY);
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(centerX - 250, centerY);
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(centerX, centerY + 250);
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(centerX, centerY - 250);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(centerX, centerY, 10, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();

        entities.forEach(entity => {
            const x = centerX + entity.coordinate[0] * koef;
            const y = centerY - entity.coordinate[1] * koef;

            ctx.beginPath();
            ctx.arc(x, y, 10, 0, 2 * Math.PI);
            ctx.fillStyle = 'blue';
            if (queryEntitys && queryEntitys.find(ent => ent.id === entity.id))
                ctx.fillStyle = 'green';
            ctx.fill();
            ctx.closePath();

            ctx.font = '12px Arial';
            ctx.fillStyle = 'black';
            ctx.fillText(entity.name, x - 15, y - 15);
        });
    }, [entities, coordinateStart, coordinateEnd, queryEntitys]);

    return (
        <section className={style.canvas}>
            <canvas className={style.paint} ref={canvasRef} width={600} height={600} />
        </section>
    );
};

export default EntityCanvas;
