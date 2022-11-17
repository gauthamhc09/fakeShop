import React from 'react';
import { useDrag } from 'react-dnd';

const Picture = ({ id, image, name }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    return (
        <img ref={drag} style={{ border: isDragging ? "5px solid hotpink" : "0px" }} src={image} width="200px" height="150px" />
    )
}

export default Picture