// components/CutSlider.js

import { Slider } from '@mantine/core';

const CutSlider = ({ value, onChange, label }) => {
    return ( <
        Slider value = { value }
        onChange = { onChange }
        min = { 0 }
        max = { 100 } // Adjust this dynamically based on audio duration
        step = { 1 }
        label = { label }
        styles = {
            (theme) => ({
                root: { padding: '20px 0' },
                thumb: {
                    backgroundColor: theme.colors.orange[5],
                },
                track: {
                    backgroundColor: theme.colors.gray[3],
                },
                bar: {
                    backgroundColor: theme.colors.orange[5],
                },
            })
        }
        />
    );
};

export default CutSlider;