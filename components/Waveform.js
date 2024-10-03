// components/Waveform.js

import { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

const Waveform = ({ audioFile }) => {
    const waveformRef = useRef(null);
    const waveSurferRef = useRef(null);

    useEffect(() => {
        if (waveformRef.current) {
            waveSurferRef.current = WaveSurfer.create({
                container: waveformRef.current,
                waveColor: '#ccc',
                progressColor: '#ff4d00',
                height: 128,
                responsive: true,
            });

            if (audioFile) {
                waveSurferRef.current.load(URL.createObjectURL(audioFile));
            }

            return () => waveSurferRef.current.destroy();
        }
    }, [audioFile]);

    return ( <
        div ref = { waveformRef }
        style = {
            {
                width: '100%',
                height: '128px',
                margin: '20px 0',
                backgroundColor: '#f0f0f0',
                borderRadius: '5px',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            }
        }
        />
    );
};

export default Waveform;