import React, { useState } from 'react';
import Welcome from '../Components/Home/Welcome';

const HomePage = () => {
    const [startingIndex, setStartigIndex] = useState(0);
    const [endingIndex, setEndingIndex] = useState(10);

    return (
        <Welcome
            startingIndex={startingIndex}
            endingIndex={endingIndex}
            setStartigIndex={setStartigIndex}
            setEndingIndex={setEndingIndex}
        />
    );
};

export default HomePage;
