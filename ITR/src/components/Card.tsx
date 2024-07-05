import { Col,Card, Container, Row,Button } from "react-bootstrap"
import {CardData,cardDataList}  from "./CardData"
import Logo from "../assets/Google.png"
import Rating from "../assets/Rating.jpg"

const HCard:React.FC = () => {
  return (
    <Container style={{paddingTop:"120px"}}>
          <Row className="align-items-center justify-center ">
          <Col className=" text-center mb-4 " >
            <h2 style={{backgroundColor: "#ffc107",fontSize: "3rem", fontWeight: "bolder"}}>Trending ITR Filing Package</h2>
            <p className="text-center text-break m-5  ">
            Our eFiling services provide accurate, efficient, and expert assistance, ensuring a seamless
                            experience from start to finish. Trust Myitronline for all your tax needs and enjoy the ease of
                            professional eFiling. 
             </p>

          </Col>
          </Row>

      <Row className=" mt-4" >
      {cardDataList.map((card: CardData, index: number) => (
        <Col key={index} lg={3}  className="mb-4">
          <Card style={{ width: "16rem" }}>
            <Card.Body>
              <Card.Title>{card.amount}</Card.Title>
              <Card.Text style={{background:"green "}}>{card.tag}</Card.Text>
              <Card.Subtitle className="mb-2 text-muted font-bold">
                <img src={Logo} className="image-start" style={{width:"30px",gap:"2"}}alt="Google"/> 
                <img src={Rating} className="image-start" style={{width:"120px"}}alt="Google"/> 
                {card.rating}
              </Card.Subtitle>
              <h3>{card.text}</h3>
              <p>{card.subText}</p>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

    </Container>
  )
}

export default HCard


