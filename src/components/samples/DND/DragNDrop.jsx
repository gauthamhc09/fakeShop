import React, { useState } from 'react'
import Picture from './Picture'
import { useDrop } from "react-dnd"


const list = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
        name: "Image 1",
    },
    {
        id: 2,
        image: "https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509__340.jpg",
        name: "Image 2",
    },
    {
        id: 3,
        image: "https://www.whoa.in/download/beautiful-mobile-wallpapers-hd-images-hd-background-wallpapers",
        name: "Image 3",
    }
]
const DragNDrop = () => {
    const [board, setBoard] = useState([]);

    const [{ isOver }, drop] = useDrop(() => (
        {
            accept: "image",
            drop: (item) => addImageToBoard(item.id),
            collect: (monitor) => ({
                isOver: !!monitor.isOver()
            })
        }
    ))

    const addImageToBoard = (id) => {

        const draggedList = list.filter((item) => item.id === id);
        setBoard(item => ([...item, draggedList[0]]))
        console.log('draggedList-board', board);
    }

    return (
        <>
            <div>
                <h1>DragNDrop</h1>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    {
                        list.map((item) => {
                            const { id, image, name } = item
                            return (
                                <Picture {...item} key={id} />
                            )
                        })
                    }
                </div>

            </div>
            <div ref={drop} style={{ border: "2px solid yellow", width: "400px", minHeight: "50vh", margin: "40px 0 0 0" }}>
                {board.map((item, index) => {
                    return (
                        <Picture {...item} key={index} />
                    )
                })}
            </div>
        </>
    )
}

export default DragNDrop