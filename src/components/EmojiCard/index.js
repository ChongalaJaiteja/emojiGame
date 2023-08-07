import "./index.css";

const EmojiCard = (props) => {
    const { emojiDetails, onEmojiClick } = props;
    const { id, emojiName, emojiUrl } = emojiDetails;
    const onSelectEmoji = () => {
        onEmojiClick(id);
    };
    return (
        <li className="emoji-container" onClick={onSelectEmoji}>
            <img src={emojiUrl} alt={emojiName} />
        </li>
    );
};

export default EmojiCard;
