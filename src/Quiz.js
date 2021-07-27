import React from 'react';
import styled from 'styled-components';

import { yellow, orange, pink, red, blue } from './colors';

const Wrapper = styled.div`
width: 450px;
background: white;
margin: 100px auto;
border-radius: 5px;
box-shadow: rgba(100, 100, 111, 0.7) 0px 7px 29px 0px;
display: flex;
flex-direction: column;
overflow: hidden;
`;

const Heading = styled.div`
display: flex;
align-items: center;
width: 100%;
height: 60px;
box-sizing: border-box;
padding-left: 25px;
font-size: 21px;
font-weight: bold;
box-shadow: rgba(100, 100, 111, 0.1) 0px 7px 29px 0px;
`;

const Content = styled.div`
width: 100%;
padding: 5px;
display: flex;
margin: 25px 0;
flex-direction: column;
box-sizing: border-box;
min-height: 200px;
padding: 0 25px;
box-sizing: border-box;
`;

const Footer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 60px;
box-sizing: border-box;
padding: 20px;
font-size: 21px;
font-weight: bold;
`;

const FooterText = styled.div`
font-size: 16px;
color: black;
`;

const FooterButton = styled.button`
height: 40px;
width: 100px;
outline: none;
background: transparent;
box-shadow: none;
border: None;
transition: all 50ms ease-in-out;
font-weight: 700;
font-size: 17px;

&:hover {
    cursor: pointer;
}
`;

const Answer = styled.div`
width: 100%;
height: 40px;
margin: 5px auto;
background: ${props => props.answered ? (props.correct ? 'rgba(145, 237, 145, 0.8)' : 'rgba(232, 135, 135, 0.8)') : 'rgba(161, 223, 251, 0.4)'};
${props => props.picked && 'box-shadow: rgba(161, 223, 251, 1) 0px 0px 0px 3px;'}
color: black;
padding: 0 25px;
border-radius: 0px;
box-sizing: border-box;
font-weight: 700;
font-size: 14px;
display: flex;
align-items: center;
transition: all 50ms ease-in-out;

&:hover {
    background: rgba(161, 223, 251, 0.6); 
    cursor: pointer;  
}
`;

const HeadingText = styled.span`
font-size: 18px;
font-weight: 700;
margin: 0 0 15px 0;
`;

const Quiz = () => {

    let questions = require('./questions.json');

    const [questionId, setQuestionId] = React.useState(0);
    const [answer, setAnswer] = React.useState('');
    const [answered, setAnswered] = React.useState(false);
    
    const checkAnswer = (answer) => {
        if (!answered) {
            setAnswered(true);
            setAnswer(answer);
        }
    }

    const goNext = () => {
        if (questionId + 1 < questions?.questions.length) {
            setQuestionId(questionId + 1);
            setAnswered(false);
            setAnswer('');
        }
    }

    return (
        <>
        <Wrapper>
            <Heading>Best QUIZ ever!</Heading>
            <Content>
                <HeadingText>{questions?.questions[questionId]?.question}</HeadingText>
                <Answer picked={answer === 'a'} answered={answered} correct={'a' === questions?.questions[questionId]?.right_answer} onClick={() => checkAnswer('a')}>{questions?.questions[questionId]?.a}</Answer>
                <Answer picked={answer === 'b'} answered={answered} correct={'b' === questions?.questions[questionId]?.right_answer} onClick={() => checkAnswer('b')}>{questions?.questions[questionId]?.b}</Answer>
                <Answer picked={answer === 'c'} answered={answered} correct={'c' === questions?.questions[questionId]?.right_answer} onClick={() => checkAnswer('c')}>{questions?.questions[questionId]?.c}</Answer>
                <Answer picked={answer === 'd'} answered={answered} correct={'d' === questions?.questions[questionId]?.right_answer} onClick={() => checkAnswer('d')}>{questions?.questions[questionId]?.d}</Answer>
            </Content>
            <Footer>
                <FooterText>{questionId + 1} of {questions?.questions?.length}</FooterText>
                {answered && questionId + 1 < questions?.questions.length && <FooterButton onClick={() => goNext()}>GO NEXT</FooterButton>}
            </Footer>
        </Wrapper>
        </>
    )
}

export default Quiz;