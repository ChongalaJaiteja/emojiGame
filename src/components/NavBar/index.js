// import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const NavBar = (props) => {
    const { hideScore, navBarDetails } = props;
    const { score, topScore, coins } = navBarDetails;
    return (
        <nav>
            <div className="logo-container">
                <img
                    src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
                    alt="emoji logo"
                    className="nav-logo"
                />
                <h1 className="logo-heading">emoji game</h1>
            </div>
            <ul className="score-container">
                {/* <Link to="/coins" className="link"> */}
                <li className="gold-coin-container" title="coins">
                    <FontAwesomeIcon
                        icon={faCoins}
                        style={{
                            color: "#f2eb1c",
                            fontSize: "clamp(1rem,1vw + 1rem,1.6rem)",
                        }}
                    />
                    <span>{coins}</span>
                </li>
                {!hideScore && (
                    <>
                        <li>Score: {score}</li>
                        <li>Top Score: {topScore}</li>
                    </>
                )}
                {/* </Link> */}
            </ul>
        </nav>
    );
};
export default NavBar;
