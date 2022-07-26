import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;

`
const Annoucement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over $50
    </Container>
  )
}

export default Annoucement