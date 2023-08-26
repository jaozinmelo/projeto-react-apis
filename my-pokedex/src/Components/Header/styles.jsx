import styled from "styled-components";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400&family=Poppins:wght@700&display=swap');
</style>;

export const Container = styled.header`
  position: relative;
  height: 10rem;
  font-size: 24px;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ButtonPokedex = styled.button`
  background-color: #33a4f5;
  width: 17.938rem;
  border-radius: 0.5rem;
  position: absolute;
  right: 6.25rem;
  height: 4.625;
  padding: 10px 4px;
`;
export const ButtonPokelist = styled.button`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 24px;
  border: none;
  background-color: transparent;
  text-decoration: underline;
  position: absolute;
  left: 6.25rem;
  height: 30px;
  padding: 10px 4px;
  justify-content: center;
  align-items: center;
  &:hover{
    color: #000000ac;
  }
  img {
    height: 25px;
    width: 25px;
  }
`;
export const DivButton = styled.div`
  display: flex;

`;
export const LogoPokedex = styled.img`
`;

export const AddToPokedexButton = styled.button`
  border-radius: 8px;
  background-color: #882525;
  width: 17.938rem;
  position: absolute;
  right: 6.25rem;
  height: 4.625;
  padding: 10px 4px;
  `;