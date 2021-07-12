import React from 'react'
import styled from 'styled-components'
import Empty from '../layouts/Empty'
import { Button, Card, Input } from '../ui/index'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`


const login = () => {
  return (
    <Container>
      <Card style={{
        textAlign: 'center',
        width: 400
      }}>
        <h1>Quiz Wall</h1>
        <Input className="mb-1" type="text" placeholder="Логин" />
        <Input className="mb-1" type="text" placeholder="Пароль" />
        <Button className="mb-1">Войти</Button>
        Регистраця | Забыли пароль?
      </Card>
    </Container>
  )
}
login.Layout = Empty
export default login
