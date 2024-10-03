// pages/index.js

import { useState } from 'react';
import { Container, Title, Divider } from '@mantine/core';
import AudioFileInput from '../components/AudioFileInput';
import Waveform from '../components/Waveform';
import CutSlider from '../components/CutSlider';
import AudioControls from '../components/AudioControls';
import '../styles/globals.css';

export default function HomePage() {
    const [audioFile, setAudioFile] = useState(null);
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(100); // Adjust this dynamically based on audio duration

    const handleFileChange = (file) => {
        setAudioFile(file);
    };

    const handlePlay = () => {
        // Implement play functionality here
        console.log('Play audio from', startTime, 'to', endTime);
    };

    const handleCutAudio = () => {
        // Implement cut audio functionality here
        console.log('Cut audio from', startTime, 'to', endTime);
    };

    return ( <
        Container size = "sm"
        className = "container"
        style = {
            { padding: '40px 20px' } } >
        <
        Title order = { 1 }
        style = {
            { marginBottom: '20px', textAlign: 'center' } } >
        Audio Cutter <
        /Title> <
        AudioFileInput onFileChange = { handleFileChange }
        /> {
            audioFile && ( <
                >
                <
                Divider my = "sm" / >
                <
                Waveform audioFile = { audioFile }
                /> <
                CutSlider value = { startTime }
                onChange = { setStartTime }
                label = "Start Time" / >
                <
                CutSlider value = { endTime }
                onChange = { setEndTime }
                label = "End Time" / >
                <
                AudioControls onPlay = { handlePlay }
                onCut = { handleCutAudio }
                /> <
                />
            )
        } <
        /Container>
    );
}