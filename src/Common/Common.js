import styled from 'styled-components';

import { makeStyles } from '@material-ui/core';
import { TextField } from '@mui/material';

export const BoxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`;

export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const MutedLink = styled.a`
    font-size: ${(props) => props.theme.fontmd};
    color: ${(props) => `rgba(${props.theme.textRgba}, 0.5)`};
    font-weight: 500;
    text-decoration: none;
`;

export const BoldLinkk = styled.a`
    font-size: ${(props) => props.theme.fontmd};
    color: var(--blue);
    font-weight: 500;
    text-decoration: none;
`;
export const CustomizedTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'var(--blue)',
        borderLeftWidth: 6,
        padding: '4px !important',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'var(--blue)',
    },
    '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
            borderColor: `${(props) => props.theme.text}`,
        },
        '&.Mui-focused fieldset': {
            borderColor: 'var(--blue)',
            borderLeftWidth: 6,
            padding: '4px !important',
        },
    },
});

export const useStyles = makeStyles(() => ({
    textField: {
        '&:not(:last-child)': {
            marginTop: 0,
            marginBottom: 5,
            fontWeight: 300,
        },
    },
    input: {
        color: 'white',
    },
}));
export const Button = styled.button`
    cursor: pointer;
    position: relative;

    float: right;
    padding: 0.5rem;
    border: none;
    outline: none;
    background: none;
    box-shadow: 6.7px 6.7px 5.3px rgba(0, 0, 0, 0.12),
        22.3px 22.3px 17.9px rgba(0, 0, 0, 0.062),
        100px 100px 80px rgba(0, 0, 0, 0.035);

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 0.1rem;
        left: 0;
        bottom: 0;
        transform: scale(0, 1);
        transition: transform 0.3s ease;
        background: ${(props) =>
            props.cancel ? `var(--red)` : `var(--green)`};
    }

    &:hover::after {
        transform: scale(1, 2);
    }
`;
export const SubmitButton = styled(Button)`
    margin-right: 1rem;
    color: ${(props) => props.theme.body};
`;
export const CancelButton = styled(Button)``;
export const ButtonClose = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    outline: none;
    cursor: pointer;
    background: transparent;
`;
