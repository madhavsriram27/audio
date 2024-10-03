// components/AudioFileInput.js

import { FileInput } from '@mantine/core';

const AudioFileInput = ({ onFileChange }) => {
    return ( <
        FileInput placeholder = "Select an audio file"
        accept = "audio/*"
        onChange = { onFileChange }
        label = "Upload Audio File"
        styles = {
            (theme) => ({
                root: {
                    marginBottom: '20px',
                    width: '100%',
                },
                input: {
                    border: `1px solid ${theme.colors.lightpurple}`,
                    '&:hover': {
                        borderColor: theme.colors.purple,
                    },
                },
            })
        }
        />
    );
};

export default AudioFileInput;