import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import Navigation from './Navigation';

const data = {
    detail: {
        writer: "john",
        title: "board test",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus corporis consectetur reprehenderit distinctio qui cupiditate molestias aliquid ratione nisi tempora unde porro nesciunt voluptas nihil excepturi deleniti, repellat cum tenetur.",
        reply: {
            1: {
                reply: "reply",
                writer: "Kim"
            },
            2: {
                reply: "Hello",
                writer: "Park"
            },
            3: {
                reply: "Bonjour",
                writer: "Choi"
            }
        }
    }
}


const Card = styled.div`
width:80%;
height:100%;
padding:50px;
margin:50px auto;
border-bottom:1px solid gray;
`;

const Title = styled.div`
`

const Writer = styled.div``

const Content = styled.div``

const Repl = styled.div`
width: 80%;
padding-left:50px;
margin:0 auto;

`;

const Row = styled.div`
width:100%;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
padding-right:30px;
margin:15px 0;
`
const SearchDiv = styled.div`
width:100%;
margin: 20px 0;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
`

const Input = styled.input`
width: 60%;
padding: 8px;
`;

const Button = styled.button`
padding:8px;
margin-left:10px;
`


const Detail = () => {
    return (
        <Container>
            <Navigation />
            <Card>
                <Title>
                    <h2>
                        {data.detail.title}
                    </h2>
                </Title>
                <Writer>
                    <h3>
                        {data.detail.writer}
                    </h3>
                </Writer>
                <Content>
                    {data.detail.content}
                </Content>
            </Card>
            <Repl>
                <Row>
                    <h4>Reply</h4>
                    <h4>Writer</h4>
                </Row>
                <Row>
                    <div>
                        {data.detail.reply[1].reply}
                    </div>
                    <div>
                        {data.detail.reply[1].writer}
                    </div>
                </Row>
                <Row>
                    <div>
                        {data.detail.reply[2].reply}
                    </div>
                    <div>
                        {data.detail.reply[2].writer}
                    </div>
                </Row>
                <Row>
                    <div>
                        {data.detail.reply[3].reply}
                    </div>
                    <div>
                        {data.detail.reply[3].writer}
                    </div>
                </Row>
            </Repl>
            <SearchDiv>
                <Input placeholder="Type reply here..." />
                <Button>Submit</Button>
            </SearchDiv>
        </Container>
    )
}

export default Detail