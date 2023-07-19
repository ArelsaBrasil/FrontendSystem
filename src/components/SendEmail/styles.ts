import styled, { css, keyframes } from "styled-components";

const ButtonStyle = `
  height: 55px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.25s ease-in-out;
  object-fit: cover;
  font-weight: 600;
  font-size: 22px;
  cursor: pointer;
`;

const fadeInAnimation = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOutAnimation = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const pulseAnimation = keyframes`
0% {
  transform: scale(1);
}
6.25% {
  transform: scale(1.075);
}
12.5% {
  transform: scale(1);
}
18.75% {
  transform: scale(1.075);

}
25% {
  transform: scale(1);
}
31.25% {
  transform: scale(1.075);

}
37.5% {
  transform: scale(1);
}
43.75% {
  transform: scale(1.075);

}
50% {
  transform: scale(1);
}
56.25% {
  transform: scale(1.06);
}
62.5% {
  transform: scale(1);
}
68.75% {
  transform: scale(1.045);

}
75% {
  transform: scale(1);
}
81.25% {
  transform: scale(1.03);

}
87.5% {
  transform: scale(1);
}
93.75% {
  transform: scale(1.015);

}
100% {
  transform: scale(1);
}

`;

export const SendEmailButton = styled.button<{
  isSending: boolean;
  isSent: boolean;
  haveError: boolean;
}>`
  ${ButtonStyle}
  padding: 0 50px;
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme["green-500"]};
  border: 2px solid ${(props) => props.theme["green-500"]};

  &disabled {
    background-color: gray;
    cursor: not-allowed;
  }

  &.fade-enter {
    opacity: 0;
  }

  &.fade-enter-active {
    opacity: 1;
    animation: ${fadeInAnimation} 0s;
  }
  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
    animation: ${fadeOutAnimation} 0s;
  }

  ${({ isSent }) =>
    isSent &&
    css`
      background-color: ${(props) => props.theme["blue-brand"]};
      border: ${(props) => props.theme["blue-brand"]};

      color: white;
      cursor: not-allowed;
    `}

  ${({ isSending }) =>
    isSending &&
    css`
      background-color: ${(props) => props.theme["gray-bg-button-disabled"]};
      opacity: 60%;
      border: ${(props) => props.theme["gray-100"]};
      color: white;
      cursor: not-allowed;
    `}
  
  ${({ haveError }) =>
    haveError &&
    css`
      background-color: ${(props) => props.theme["red-300"]};
      border: ${(props) => props.theme["red-300"]};

      color: white;
      cursor: not-allowed;
      animation: ${pulseAnimation} 6s ease-in-out;
    `}
`;
