
// const Landing_page = () => {
//     return (
//         <main>
//             <section className="bg-opacity-30 mt-5  py-6 pt-lg-7 pt-md-8 py-m d-6 py-sm-6 ">
//                 <div className="container">
//                     <div className="row g-4">
//                         <div className="col-md-12 text-center mb-lg-4">
//                             <h1 className="display-5 fw-bold"> India's leading Tax e-filing website </h1>
//                             <p className="text-body-secondary ms-3 ">Filing the income tax return is so straightforward that users can easily fill
//                                 and submit it on their own.
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="row g-4 ms-4 ">
//                     <div className="col-12 col-md-6">
//                         <div className="border-0 card-primary shadow-lg mb-5 card-lift">
//                             <div className="card-body">
//                                 <div className="row d-flex align-items-center">
//                                     <div className="col-lg-4 col-xl-4 col-md-12 col-12">
//                                         <figure className="mb-4">
//                                             <img className="img-fluid rounded-3" src="https://myitronline.com/build/assets/itr-fling-BMOhTgUc.svg" alt=" MyItrOnlineServices" />
//                                         </figure>
//                                     </div>
//                                     <div className="ms-3 text-wrap col-lg-8 col-xl-8 col-md-12 col-12">
//                                         <h2 className="card-title h3 mb-2"> Start ITR filing Yourself</h2>
//                                         <p className="font-bold">
//                                             We have changed the way people do tax filing in India. We
//                                             don’t just get your tax return filed within minutes but get you maximum refunds
//                                             in shortest time.
//                                         </p>
//                                         <a href="#" className="mb-4 btn btn-warning rounded-5 me-2 icon-link icon-link-hover card-link">
//                                             File ITR Now
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
//                                             <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />

//                                         </svg>
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="col-12 col-md-6 ms-4  g-4 ">
//                         <div className="border-0 card-primary shadow-lg card-lift">
//                             <div className="card-body">
//                                 <div className="row d-flex align-items-center">
//                                     <div className="col-lg-4 col-xl-4 col-md-12 col-12">
//                                         <figure className="mb-4 ">
//                                         <img className="img-fluid rounded-3" src="https://myitronline.com/build/assets/call-support-DMg_3X3d.svg" alt="MYITRONLINE SERVICES"/>

//                                         </figure>
//                                     </div>
//                                     <div className="col-lg-8 col-xl-8 col-md-12 col-12 ">
//                                         <h2 className="card-title h3"> Start ITR filing Yourself</h2>
//                                         <p>
//                                             We have changed the way people do tax filing in India. We
//                                             don’t just get your tax return filed within minutes but get you maximum refunds
//                                             in shortest time.
//                                         </p>
//                                         <a href="#" className="btn btn-warning rounded-5 me-2 icon-link icon-link-hover card-link ">
//                                             File ITR Now
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
//                                             <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
//                                         </svg>
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
// <a>

// </a>


//             </section>
//         </main>


//     )
// }


// export default Landing_page

import { Button, Card, Col, Container, Row, Stack } from "react-bootstrap";

const LandingPage = () => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col className="text-center mb-4">
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
            India's leading Tax e-filing website
          </h2>
          <p className="text-center">
            Filing the income tax return is so straightforward that users can
            easily fill and submit it on their own.
          </p>
        </Col>
      </Row>

<<<<<<< HEAD
const Landing_page:React.FC = () => {
    return (
        <Container className="mt-4 mb-5 ">
        <Row className="align-items-center justify-center ms-4">
          <Col className=" text-center mb-4 " >
            <h2 style={{ fontSize: "3rem", fontWeight: "bold"}}>India's leading Tax e-filing website</h2>
            <p className="text-center text-break ">
              Filing the income tax return is so straightforward that users can easily fill and submit it on their own.
            </p>
          </Col>
         
        </Row>
        <Row className="mt-4 d-flex justify-content-center" >
      <Col lg={6} md={12} className="mb-4" style={{ width: "50%" }}>
        <Card className="d-flex gap-3 p-2 flex-row align-items-center hover-effect" style={{ borderRadius: "10px", boxShadow: '0 2px 4px rgba(0,0,0,0.1)', height: '' }}>
          <div>
            <img style={{ width: "10rem" }} src="https://myitronline.com/build/assets/itr-fling-BMOhTgUc.svg" alt="" />
          </div>
          <div style={{ flex: '1', padding: '' }}>
            <Card.Body>
              <Card.Title as="h3" style={{ fontWeight: "bold" }}>Start ITR Filing Yourself</Card.Title>
              <Card.Text>
                We have changed the way people do tax filing in India. We don’t just get your tax return filed within minutes but get you maximum refunds in the shortest time.
              </Card.Text>
              <Button size="lg" style={{ border: "none", backgroundColor: "#ffc107", color: "black", borderRadius: "30px" }}>File ITR Now</Button>
            </Card.Body>
          </div>
        </Card>
      </Col>
       <Col lg={6} md={12} className="mb-4" style={{ width: "50%" }}>
        <Card className="d-flex gap-3 p-2 flex-row align-items-center hover-effect1" style={{ borderRadius: "10px", boxShadow: '0 2px 4px rgba(0,0,0,0.1)', height: '' }}>
          <div style={{ padding: '' }}>
            <img style={{ width: "10rem" }} src="https://myitronline.com/build/assets/call-support-DMg_3X3d.svg" alt="" />
          </div>
          <div style={{ flex: '1', padding: '' }}>
            <Card.Body>
              <Card.Title as="h3" style={{ fontWeight: "bold" }}>Start ITR Filing Yourself</Card.Title>
              <Card.Text>
                We have changed the way people do tax filing in India. We don’t just get your tax return filed within minutes but get you maximum refunds in the shortest time.
              </Card.Text>
              <Button size="lg" style={{ border: "none", backgroundColor: "#ffc107", color: "black", borderRadius: "30px" }}>Hire Expert Now</Button>
            </Card.Body>
          </div>
        </Card>
      </Col>
    </Row>
    <Col className="mb-5 d-flex justify-content-center">
      <Stack gap={5} direction="horizontal" className="text-center">
        <Button size="lg" variant="primary"  style={{fontSize:"14px",backgroundColor: "#1a73e8", color: "white", border: "none", borderRadius: "40px", width: "200px",fontWeight:"bold" }}>
          Upload Form16 Direct
        </Button>
        <Button size="lg" style={{fontSize:"14px", backgroundColor: "#ffc107", color: "black", border: "none", borderRadius: "40px", width: "180px",fontWeight:"bold",textWrap:"nowrap" }}>
          Consultancy Fee
        </Button>
        <Button size="lg" style={{ fontSize:"14px",backgroundColor: "#ffc107",padding:"10px", color: "black", border: "none", borderRadius: "40px", width: "200px",fontWeight:"bold" }}>
          Generate Free Rent Receipt
        </Button>
      </Stack>
    </Col>
      </Container>
=======
  
      <Row className="mt-4">
      
        <Col lg={6} md={12} className="mb-4">
          <Card
            className="text-center"
            style={{
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <Card.Img
              variant="top"
              src="https://myitronline.com/build/assets/itr-fling-BMOhTgUc.svg"
              className="card-img-sm"
            />
            <Card.Body>
              <Card.Title as="h3">Start ITR Filing Yourself</Card.Title>
              <Card.Text>
                We have changed the way people do tax filing in India. We don’t
                just get your tax return filed within minutes but get you
                maximum refunds in the shortest time.
              </Card.Text>
              <Button
                style={{
                  border: "none",
                  backgroundColor: "yellow",
                  color: "black",
                  borderRadius: "20px",
                }}
              >
                File ITR Now
              </Button>
            </Card.Body>
          </Card>
        </Col>

        
        <Col lg={6} md={12} className="mb-4">
          <Card
            className="text-center"
            style={{
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <Card.Img
              variant="top"
              src="https://myitronline.com/build/assets/itr-fling-BMOhTgUc.svg"
              style={{width:"20rem"}}
            />
            <Card.Body>
              <Card.Title as="h3" style={{}}>Start ITR Filing Yourself</Card.Title>
              <Card.Text>
                We have changed the way people do tax filing in India. We don’t
                just get your tax return filed within minutes but get you
                maximum refunds in the shortest time.
              </Card.Text>
              <Button
                style={{
                  border: "none",
                  backgroundColor: "yellow",
                  color: "black",
                  borderRadius: "20px",
                }}
              >
                File ITR Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center mt-4">
        
        <Col lg={12} className="text-center mb-3 d-lg-block d-md-none">
          <Stack direction="horizontal" gap={3}>
            <Button
              style={{
                backgroundColor: "#1a73e8",
                color: "black",
                border: "none",
                borderRadius: "20px",
              }}
            >
              Button 1
            </Button>
            <Button
              style={{
                backgroundColor: "yellow",
                color: "black",
                border: "none",
                borderRadius: "20px",
              }}
            >
              Button 2
            </Button>
            <Button
              style={{
                backgroundColor: "yellow",
                color: "black",
                border: "none",
                borderRadius: "20px",
              }}
            >
              Button 3
            </Button>
          </Stack>
        </Col>
       
      </Row>
    </Container>
  );
};
>>>>>>> f2723e4a6083efb391c3ff84ed3d3a99b7c56b59

export default LandingPage;

