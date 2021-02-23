import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
margin:40px 0;
`

const Navigation = () => {
    return (
        <Wrapper>
            <Nav
                activeKey="/"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                    <Link to="/" style={{ margin: 20 }}>Home</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/notice" style={{ margin: 20 }}>공지사항</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/board" style={{ margin: 20 }}>자유게시판</Link>
                </Nav.Item>
            </Nav>
        </Wrapper>
    )
}

export default Navigation