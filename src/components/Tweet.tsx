import { ArrowClockwise, ChatCircle, Heart } from "phosphor-react";
import "./Tweet.css";

export function Tweet() {
    return (
        <a className="tweet">
            <img src="https://github.com/jeanluca554.png" alt="Jean Luca" />

            <div className="tweet-content">
                <div className="tweet-content-header">
                    <strong>Jean Luca</strong>
                    <span>@jeanluca</span>
                </div>

                <p>
                    Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram:<br />
                    <br />
                    ✅ npm start: De 32s para 400ms (sim, demorava 30s)<br />
                    ✅ npm build: De 120s para 22s<br />
                    <br />
                    Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥
                </p>

                <div className="tweet-content-footer">
                    <button type="button">
                        <ChatCircle />
                        20
                    </button>

                    <button type="button">
                        <ArrowClockwise />
                        20
                    </button>

                    <button type="button">
                        <Heart />
                        20
                    </button>

                </div>
            </div>
        </a>
    )
}