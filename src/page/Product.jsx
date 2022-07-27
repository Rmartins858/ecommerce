import Annoucement from '../components/Annoucement';
import styled from "styled-components"
import Navbar from "../components/Navbar"
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Container = styled.div``
const Wrapper = styled.div`
padding: 50px;
display: flex;
`
const ImgContainer = styled.div`
flex: 1;
`
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
`
const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
`
const Title = styled.h1`
font-weight: 200;

`
const Desc = styled.p`
margin: 20px 0px;

`
const Price = styled.span`
font-weight: 100;
font-size: 40px;
`




const Product = () => {
  return (
   <Container>
    <Navbar/>
    <Annoucement/>
    <Wrapper>
        <ImgContainer>
        <Image src='https://i.ibb.co/S6qMxwr/jean.jpg'/>
        </ImgContainer>
        <InfoContainer>
            <Title> Denim Jumpsuit</Title>
            <Desc> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Totam numquam deserunt pariatur porro fugit libero mollitia sed temporibus
                 fuga saepe aperiam sit commodi tenetur at, necessitatibus nesciunt eaque! 
                 Dolorum, architecto!</Desc>
            <Price>$ 20</Price>
        </InfoContainer>
    </Wrapper>
    <Newsletter/>
    <Footer/>
   </Container>
  )
}

export default Product