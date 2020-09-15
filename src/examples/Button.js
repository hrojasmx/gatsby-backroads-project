import styled from "styled-components";

const color = 'blue';

const Button = styled.button`
  /* color: red; */
  color: ${props => {
    console.log('props->', props);
    console.log('props.color->', props.color);
    return props.color;
}};
  background: ${color};
  // font-size: 1rem;
  font-size: ${ props => props.big ? "3rem" : "1rem" };
  padding: 1rem;
  margin: 1rem;
`

export default Button;
