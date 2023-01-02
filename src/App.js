import logo from './logo.svg';
import './App.css';
import React from 'react';
import Hellola from './Hellola';
import { useEffect, useState } from 'react';
import ThemeProvider from 'react-bootstrap/ThemeProvider'

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>





function App() {

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${day}-${month}-${year}`;
  console.log(currentDate); // "17-6-2022"

  // const data = []
  const [qouteInfo, setQouteInfo] = useState({});

  useEffect(() => {
    gettingData();
    console.log('Effect activated!')
  }, [])
  // oJdxKbC6JarDLCMfGUU40A==QqPpg30R9a2dFL4N

  async function gettingData() {
    console.log('a')


    let Response = await fetch('https://type.fit/api/quotes')
    console.log(Response)
    console.log('f')


    // console.log(Response)
    let data = await Response.json()
    console.log(data[1])

    let random = Math.floor(Math.random() * data.length)
    setQouteInfo({ text: data[random].text, author: data[random].author })
    console.log(qouteInfo)

  }

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs">

      <div className="App" >
        <Container >

          <Row >
            <Col md={6} style={{ margin: 'auto' }} >
              <div id='title'  className='container  '  > <h1 id='hTitle'>Qoute Of The Day <span>
                {currentDate}  </span>
              </h1> </div>
              <div id='quote-box' >

                <div id="text">


                  <img style={{ width: "10%", height: "10%" }} src={"./qoute.png"} /> <strong > {qouteInfo.text} </strong>

                </div>

                <Row>
              
                  <Col lg={6}>

                <div id="author" className='container'>
                  <h1 style={{ fontSize: 25 }}>  {qouteInfo.author} </h1>

                </div>
                </Col> 
                <Col lg={6}>

<button className='btn btn-one '  onClick={gettingData} ><span> New Qoute </span></button>
</Col>
               
                </Row>


                <a id="tweet-quote">

                </a>


              </div>
            </Col>
          </Row>
        </Container>


      </div>

    </ThemeProvider>

  );
}





export default App;

