import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Table, Pagination, Button as Btn } from 'react-bootstrap'
import Navigation from '../components/Navigation';
import styled from 'styled-components'

const SearchDiv = styled.div`
width:100%;
margin: 20px 0;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
`

const Write = styled.div`
width:100%;
display:flex;
justify-content:flex-end;
margin:10px 0;
`

const Input = styled.input`
width: 40%;
padding: 8px;
`;

const Button = styled.button`
padding:8px;
margin-left:10px;
`

const Page = styled.div`
width:100%;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
`

const Notice = () => {
    const [active, setActive] = useState<number>(1);
    let items = [];
    for (let i = 1; i <= 5; i++) {
        items.push(
            <Pagination.Item key={i} active={i === active} onClick={() => setActive(i)}>
                {i}
            </Pagination.Item>
        )
    }

    return (
        <Container>
            <Navigation />
            <h2>자유게시판</h2>
            <Write>
                <Btn variant="primary">글쓰기</Btn>
            </Write>
            <Table striped bordered hover style={{ margin: '10' }}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>title</th>
                        <th>writer</th>
                        <th>hit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ cursor: "pointer" }}>
                        <td style={{ textAlign: 'center' }} width="50">1</td>
                        <Link to="/detail">
                            <td width="700" style={{ border: 'none' }}>Mark</td>
                        </Link>
                        <td width="100">Otto</td>
                        <td width="50">5</td>
                    </tr>
                    <tr style={{ cursor: "pointer" }}>
                        <td style={{ textAlign: 'center' }}>2</td>
                        <Link to="/detail">
                            <td width="700" style={{ border: 'none' }}>Title</td>
                        </Link>
                        <td>Thornton</td>
                        <td>10</td>
                    </tr>
                    <tr style={{ cursor: "pointer" }}>
                        <td style={{ textAlign: 'center' }}>3</td>
                        <Link to="/detail">
                            <td width="700" style={{ border: 'none' }}>Title</td>
                        </Link>
                        <td>Thornton</td>
                        <td>15</td>
                    </tr>
                </tbody>
            </Table>
            <SearchDiv>
                <Input placeholder="검색어 입력" />
                <Button>Search</Button>
            </SearchDiv>
            <Page>
                <Pagination style={{ margin: 0 }}>{items}</Pagination>
            </Page>
        </Container>
    )
}

export default Notice