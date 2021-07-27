import styled from "styled-components";


const Container = styled.footer`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    background-color: ${props => props.theme.hfbSection};
    color: ${props => props.theme.hfbTxtColor};

`;


function Footer() {
    return (
        <Container>
            Its Just A Practice - CreasY
        </Container>
    )
}

export default Footer;
