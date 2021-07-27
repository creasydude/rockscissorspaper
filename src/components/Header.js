import styled from 'styled-components';

const Section = styled.header`
    background-color: ${props => props.theme.hfbSection};

`;

const Mul = styled.ul`
    padding: 1rem 2.5rem;
    margin: 0;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    

`;

const Mli = styled.li`

    & span {
        font-size: 2rem;
        color: ${props => props.theme.hfbTxtColor};
    }

`;

//Toggle Btn
const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const ChkboxInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .slider {
    background-color: #393E46;
  }
  &:focus + .slider {
    box-shadow: 0 0 1px #393E46;
  }

  &:checked + .slider::before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;

  &::before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  }
`

function Header(props) {

    return (
        <Section>
            <Mul>
                <Mli>
                    <span>RPS</span>
                </Mli>
                <Mli>
                    <Switch>
                        <ChkboxInput checked={props.theme === "light" ? false : true} type="checkbox" />
                        <Slider onClick={props.themeHandler} className="slider" />
                    </Switch>
                </Mli>
            </Mul>
        </Section>
    )
}

export default Header
