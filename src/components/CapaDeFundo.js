import styled from "styled-components";
import config from "../../config.json";
const StyledCapa = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  img {
  width: 100%;
  height: 230px;
  object-fit: cover;
  margin-bottom: -50px;
}
`;

export default function CapaDeFuno() {
  return(
    <StyledCapa>
       <img src={config.capaDeFundo} />
    </StyledCapa>
  )
}