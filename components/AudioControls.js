// components/AudioControls.js

import { Button, Group } from '@mantine/core';

const AudioControls = ({ onCut, onPlay }) => {
    return ( <
        Group position = "center"
        style = {
            { margin: '20px 0' } } >
        <
        Button onClick = { onPlay }
        color = "blue"
        style = {
            { width: '120px' } } >
        Play <
        /Button> <
        Button onClick = { onCut }
        color = "orange"
        style = {
            { width: '120px' } } >
        Cut Audio <
        /Button> <
        /Group>
    );
};

export default AudioControls;