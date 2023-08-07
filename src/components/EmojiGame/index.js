import { Component } from "react";
import NavBar from "../NavBar";
import EmojiCard from "../EmojiCard";
import WinOrLoseCard from "../WinOrLoseCard";

import "./index.css";

class EmojiGame extends Component {
    state = {
        score: 0,
        topScore: 0,
        prevEmojisListId: [],
        isGameOver: false,
        coins: 0,
        useCoinsCount: 1,
    };

    shuffledEmojisList = () => {
        const { emojisList } = this.props;
        return emojisList.sort(() => Math.random() - 0.5);
    };

    onEmojiClick = (id) => {
        const { prevEmojisListId, score } = this.state;
        const { emojisList } = this.props;
        const isValidEmoji =
            prevEmojisListId.length === 0 || !prevEmojisListId.includes(id);
        this.setState((prevState) => ({
            score: isValidEmoji ? prevState.score + 1 : prevState.score,
            prevEmojisListId: isValidEmoji
                ? [...prevState.prevEmojisListId, id]
                : prevState.prevEmojisListId,
            isGameOver:
                isValidEmoji && score + 1 === emojisList.length
                    ? true
                    : !isValidEmoji,
            coins:
                isValidEmoji && score + 1 === emojisList.length
                    ? prevState.coins + 1
                    : prevState.coins,
        }));
    };

    onReplay = () => {
        const { score, topScore } = this.state;
        this.setState({
            score: 0,
            topScore: Math.max(score, topScore),
            prevEmojisListId: [],
            isGameOver: false,
            useCoinsCount: 1,
        });
    };

    onUseCoins = () => {
        this.setState((prevState) => ({
            coins: prevState.coins - prevState.useCoinsCount,
            useCoinsCount: prevState.useCoinsCount * 2,
            isGameOver: false,
        }));
    };

    render() {
        const { score, topScore, isGameOver, coins, useCoinsCount } =
            this.state;
        const emojisList = this.shuffledEmojisList();
        return (
            <div className="app-container">
                <NavBar
                    navBarDetails={{ score, topScore, coins }}
                    hideScore={isGameOver}
                />
                <div className="emoji-game-bottom-container">
                    {isGameOver ? (
                        <WinOrLoseCard
                            scoreDetails={{ score, coins, useCoinsCount }}
                            isWon={score === emojisList.length}
                            onReplay={this.onReplay}
                            onUseCoins={this.onUseCoins}
                            overAllScore={emojisList.length}
                        />
                    ) : (
                        <ul className="emoji-game-container">
                            {emojisList.map((eachEmoji) => (
                                <EmojiCard
                                    key={eachEmoji.id}
                                    emojiDetails={eachEmoji}
                                    onEmojiClick={this.onEmojiClick}
                                />
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        );
    }
}

export default EmojiGame;
