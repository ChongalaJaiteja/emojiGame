import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const WinOrLoseCard = (props) => {
    const { isWon, onReplay, overAllScore, onUseCoins, scoreDetails } = props;
    const { score, coins, useCoinsCount } = scoreDetails;

    const resultText = isWon ? "You Won" : "You Lose";
    const resultScoreText = isWon ? "Best Score" : "Score";

    const resultImage = isWon
        ? "https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        : "https://assets.ccbp.in/frontend/react-js/lose-game-img.png";
    const altImgUrl = isWon ? "win" : "lose";

    const playAgain = () => {
        onReplay();
    };

    const useCoins = () => {
        onUseCoins();
    };
    return (
        <div className="result-container">
            <img src={resultImage} alt={altImgUrl} className="result-img" />
            <div className="result-score-container">
                <h1 className="result-heading">{resultText}</h1>
                <p>
                    {resultScoreText}{" "}
                    <span className="score">
                        {score}/{overAllScore}
                    </span>
                </p>
                {coins >= useCoinsCount && !isWon && (
                    <button
                        type="button"
                        className="replay-btn use-coins-btn"
                        onClick={useCoins}
                    >
                        <span>Play on {useCoinsCount}</span>
                        <FontAwesomeIcon
                            icon={faCoins}
                            style={{
                                color: "#f2eb1c",
                                fontSize: "clamp(1rem,1vw + 0.7rem,1.2rem)",
                            }}
                        />
                    </button>
                )}

                <button
                    type="button"
                    className="replay-btn"
                    onClick={playAgain}
                >
                    Play Again
                </button>
            </div>
        </div>
    );
};
export default WinOrLoseCard;
