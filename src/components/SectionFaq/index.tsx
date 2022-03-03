// Packages
import React from 'react'

// Components
import { Container, Heading } from '../index'

// Utils
import faq from './content'

// Styles
import * as S from './styles'

const SectionFaq = () => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <S.Wrapper>
    <S.Content>
      <Container>
        <Heading>FAQ</Heading>

        <S.Questions>
          {faq.map(({ question, answer }, index) => (
            <S.Question key={index}>
              <Heading lineBottom>{question}</Heading>
              <div dangerouslySetInnerHTML={{ __html: answer }} />
            </S.Question>
          ))}
        </S.Questions>

        <S.ExtraQuestion>
          <Heading lineBottom>Eu tenho outra dúvida!</Heading>
          <p>
            Sem problemas! Você pode acessar qualquer uma das{' '}
            <a
              href="https://willianjusten.com.br/about"
              target="_blank"
              rel="noreferrer"
            >
              minhas redes sociais
            </a>{' '}
            ou entrar no{' '}
            <a href="http://bit.ly/slack-will" target="_blank" rel="noreferrer">
              slack do nosso curso.
            </a>
          </p>
        </S.ExtraQuestion>
      </Container>
    </S.Content>
  </S.Wrapper>
)

export default SectionFaq
