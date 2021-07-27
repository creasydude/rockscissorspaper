import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

const InputSection = styled.div`
    grid-area: S;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    & p {
        color: ${props => props.theme.mainSectionTxtColor};
        font-size: 1.5rem;
        padding: 2rem;
    }
   
`;

const SubmitLink = styled(NavLink)`
    margin: 2rem;
    padding: 0.75rem 2.75rem;
    background-color: ${props => props.theme.hfbSection};
    border-radius: 10px;
    color: ${props => props.theme.hfbTxtColor};
    text-decoration: none;
    font-size: 1.5rem;

`;

const Select = styled.select`
    margin: 1rem;
    padding: 1rem 2rem;
    outline: none;
    border: none;
    background-color: ${props => props.theme.selection};
    color: ${props=> props.theme.selectionTxtColor};

`;

function Start({
    chosen,
    setChosen
}) {
    const chosenHandler = (e) => {
        setChosen(e.target.value)
    }
    return (
        <Section>
            <InputSection>
                <p>Choose Your Play 😜</p>
                <Select onChange={chosenHandler}>
                    <option value="empty">👉 Click To Choose 👈</option>
                    <option value="rock"> 🗿 Rock 🗿</option>
                    <option value="scissors">✂️ Scissors ✂️</option>
                    <option value="paper">📝 Paper 📝</option>
                </Select>
            <SubmitLink to="/game">Go 🚀</SubmitLink>
            </InputSection>
        </Section>
    )
}

export default Start;
