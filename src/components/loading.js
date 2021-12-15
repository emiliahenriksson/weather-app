import React, {useEffect, useState} from "react";
import styled from 'styled-components';

const Loading = () => {
    return(
        <LoadingStyle id="loadingScreen">
            <div className="loading">
                <div className="circle circle1"></div>
                <div className="circle circle2"></div>
                <div className="circle circle3"></div>
            </div>
        </LoadingStyle>
    )
}

const LoadingStyle = styled.div `

    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .loading {
        display: flex;
    }

    .circle {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #000;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        margin: 3px;
    }
    .circle1 {
        animation-name: loading1;
    }
    .circle2 {
        animation-name: loading2;
    }
    .circle3 {
        animation-name: loading3;
    }

    @keyframes loading1 {
        0% {
            opacity: 0%;
        }
        33% {
            opacity: 100%;
        }
        100% {
            opacity: 0%;
        }
    }
    @keyframes loading2 {
        0% {
            opacity: 0%;
        }
        33% {
            opacity: 0%;
        }
        67% {
            opacity: 100%;
        }
        100% {
            opacity: 0%;
        }
    }
    @keyframes loading3 {
        0% {
            opacity: 0%;
        }
        67% {
            opacity: 0%;
        }
        100% {
            opacity: 100%;
        }
    }

`

export default Loading;

