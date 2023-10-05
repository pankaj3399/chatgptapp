import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';

export const cx = classNames;

export const getRandomInt = (min = 1, max = 10000000) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export const useTypingEffect = (textToType, interKeyStrokeDurationMs, setNewMessage, setNewMessageTimestamp) => {

    // states
    const [currentPosition, setCurrentPosition] = useState(0);

    const currentPositionRef = useRef(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentPosition((value) => value + 1);
            currentPositionRef.current += 1;

            if (currentPositionRef.current > textToType.length) {
                clearInterval(intervalId);
                // Typing effect completed, setNewMessage to null
                if (setNewMessage) {
                    setNewMessage('');
                    setNewMessageTimestamp('');
                }
            }
        }, interKeyStrokeDurationMs)

        return () => {
            clearInterval(intervalId);
            currentPositionRef.current = 0;
            setCurrentPosition(0);
        }

    }, [interKeyStrokeDurationMs, textToType, setNewMessage, setNewMessageTimestamp])

    return textToType.substring(0, currentPosition)
}