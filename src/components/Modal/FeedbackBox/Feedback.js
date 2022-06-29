import React, { useState } from 'react';
import styled from 'styled-components';
import ReactDom from 'react-dom';
import {
    Button,
    CustomizedTextField,
    FormContainer,
} from '../../../Common/Common';
import { Marginer } from '../../../Common/Marginer';
import { Rating } from 'react-simple-star-rating';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Container = styled.div`
    position: fixed;
    z-index: 50;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    backdrop-filter: blur(4px);
    overflow: hidden;
    background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};
`;
const BoxContainer = styled.div`
    width: 20vw;
    min-height: 50vh;
    flex-direction: column;
    border-radius: 19px;
    padding: 2rem 2rem;
    background-color: ${(props) => props.theme.body};
    box-shadow: 0 0 2px ${(props) => `rgba(${props.themebodyRgba})`};
    overflow: hidden;
    position: relative;
    z-index: 100;

    @media (max-width: 72em) {
        width: 20em;
    }
`;
const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 5rem;
    z-index: 20;
`;
const CloseContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    justify-content: flex-end;
    align-items: center;
    left: 8rem;
`;
const Close = styled.h2`
    top: 1rem;
    z-index: 20;
    font-size: ${(props) => props.theme.fontxl};
    font-weight: 600;
    line-height: 1.24;
    color: (--red);
    cursor: pointer;

    &:hover {
        color: ${(props) => `rgba(${props.theme.textRgba}, 0.7)`};
    }
`;
const HeaderText = styled.h2`
    font-size: ${(props) => props.theme.fontxl};
    font-weight: 600;
    line-height: 1.24;
    color: ${(props) => props.theme.text};
`;
const Feedback = ({ show, close, data }) => {
    const [rating, setRating] = useState(0); // initial rating value
    const [comment, setComment] = useState(''); // initial rating value
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    const handleRating = (rate) => {
        setRating(rate);
    };

    const submitFeedback = async (e) => {
        e.preventDefault();
        const json = JSON.stringify({
            TourID: data.TourID,
            OID: data.OID,
            Time: today,
            Vote: rating / 20,
            Comment: comment,
        });
        const response = await axios.post(
            'http://localhost:3100/feedback/add',
            json,
            {
                headers: {
                    // Overwrite Axios's automatically set Content-Type
                    'Content-Type': 'application/json',
                },
            }
        );
        if (response?.data.code === 200) {
            notify('Cám ơn bạn đã gửi phản hồi😘');
        }
    };
    const notify = (message) =>
        toast.success(message, {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
    return ReactDom.createPortal(
        <Container>
            <BoxContainer>
                <CloseContainer>
                    <Close onClick={close}>✘</Close>
                </CloseContainer>
                <HeaderContainer>
                    <HeaderText>Phản hồi</HeaderText>
                </HeaderContainer>
                <InnerContainer>
                    <FormContainer>
                        <Marginer direction='vertical' margin='10rem' />
                        <Rating
                            onClick={handleRating}
                            ratingValue={rating} /* Available Props */
                        />
                        <CustomizedTextField
                            label='Cảm nhận của bạn sau khi tham gia'
                            type='Text'
                            fullWidth
                            variant='outlined'
                            id='custom-css-outlined-input'
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <Marginer direction='vertical' margin={10} />
                        <Button onClick={(e) => submitFeedback(e)}>Gửi</Button>
                    </FormContainer>
                </InnerContainer>
            </BoxContainer>
            <ToastContainer
                position='bottom-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
            />
        </Container>,
        document.getElementById('login')
    );
};

export default Feedback;
