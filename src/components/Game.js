import { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const PlayAgain = styled(NavLink)`
    margin: 2rem;
    padding: 0.75rem 2.75rem;
    background-color: ${props => props.theme.hfbSection};
    border-radius: 10px;
    color: ${props => props.theme.hfbTxtColor};
    text-decoration: none;
    font-size: 1.5rem;
`;

const Section = styled.section`
    margin: 0;
    padding: 0;
    height: 100vh;
    background-color: ${props => props.theme.bgColor};
    display: grid; 
    grid-template-columns: 1fr 3fr 1fr; 
    grid-template-rows: repeat(6,1fr); 
    gap: 0px 0px; 
    grid-template-areas: 
    ". . ."
    ". S ."
    ". S ."
    ". S ."
    ". S ."
    ". . ."; 
`;

const MainSection = styled.div`
    grid-area: S;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    & p {
        color: ${props => props.theme.mainSectionTxtColor};
        font-size: 1.5rem;
    }
`;

const SuccsessSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.mainSectionTxtColor};
`;

function Game({
    chosen
}) {
    const rps = ['rock', 'scissors', 'paper']
    const [botChosen, setBotChosen] = useState();

    const botHandler = () => {
        setBotChosen(rps[Math.floor(Math.random() * 3)])
    }

    useEffect(() => {
        botHandler()
    })

    const [result, setResult] = useState();

    const scoreHandler = () => {
        if (chosen === "empty") {
            setResult('Play Again And Pick Something Please!')
        } else if (chosen === '') {
            setResult('Play Again And Pick Something Please!')
        } else if (chosen === "rock" && botChosen === "paper") {
            setResult('lose')

        } else if (chosen === "rock" && botChosen === "scissors") {
            setResult('win')

        } else if (chosen === "scissors" && botChosen === "rock") {
            setResult('lose')

        } else if (chosen === "scissors" && botChosen === "paper") {
            setResult('win')

        } else if (chosen === "paper" && botChosen === "rock") {
            setResult('win')

        } else if (chosen === "paper" && botChosen === "scissors") {
            setResult('lose')

        } else {
            setResult('draw')
        }

    }

    useEffect(() => {
        scoreHandler()
    }, [botHandler])

    const showEmojiHandlerH = () => {
        let emoji;
        if (chosen === "rock") {
            emoji = "🗿"
        } else if ( chosen === 'scissors') {
            emoji = "✂️"
        } else if (chosen === "paper") {
            emoji = "📝"
        }

        return emoji
    }
    const showEmojiHandlerB = () => {
        let emoji;
        if (botChosen === "rock") {
            emoji = "🗿"
        } else if ( botChosen === 'scissors') {
            emoji = "✂️"
        } else if (botChosen === "paper") {
            emoji = "📝"
        }

        return emoji
    }

    const successShow = (
        <SuccsessSection>
            <p>You Chosen {chosen} !</p>
            <p>Ai Chosen {botChosen} !</p>
            <p>{showEmojiHandlerH()} Vs {showEmojiHandlerB()}</p>
            <p>Result : {result} !</p>
        </SuccsessSection>
    );


    return (
        <Section>
            <MainSection>
                {result === "Play Again And Pick Something Please!" || '' ? <p>{result}</p> : successShow}
                <br />
                <PlayAgain to="/" onClick={botHandler}>
                    Play Again 🔁
                </PlayAgain>
            </MainSection>
        </Section>
    )
}

export default Game;
