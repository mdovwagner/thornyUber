import React from 'react';
import CityCard from './Card';
import Grid from '@material-ui/core/Grid';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function onDragEnd(result, hand) {
    // dropped outside the list
    if (!result.destination) {
        return;
    }
   
    const [removed] = hand.splice(result.source.index, 1);
    hand.splice(result.destination.index, 0, removed);
}

export default function Hand(props) {


    return (
        <DragDropContext onDragEnd={(result) => onDragEnd(result, props.hand)}>
        <Droppable droppableId="droppable" direction="horizontal">
        {(provided, snapshot) => (
        <Grid container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            ref={provided.innerRef}
            {...provided.droppableProps}
        >
            {props.hand.map( (city, idx) =>
                <Draggable key={city} draggableId={city} index={idx}>
                    {(provided, snapshot) => (
                    <Grid item
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <CityCard title={city} onClick={props.onClick} />
                    </Grid>
                    )}
                </Draggable>
            )}
        </Grid>
        )}
        </Droppable>
        </DragDropContext>
    );
}