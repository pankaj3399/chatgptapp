import { useTypingEffect } from '../../../hooks/helpers'

const TypingMessage = ({ content, setNewMessage, setNewMessageTimestamp }) => {
    const msg = useTypingEffect(content, 100, setNewMessage, setNewMessageTimestamp);
    return msg;
};
// const TypingMessage = React.memo(function TypingMessage({ content }) {
//     const msg = useTypingEffect(content, 100);
//     return msg;
// });

// TypingMessage.displayName = 'TypingMessage';

export default TypingMessage