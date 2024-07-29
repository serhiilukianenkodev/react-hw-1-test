import styled from 'styled-components';

export const Card = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 480px;
  padding: 24px;
  border: 1px solid black;
  border-radius: 15px;
  box-shadow: 1px 4px 4px 1px #252525;

  &:not(:last-child) {
    margin-bottom: 18px;
  }
`;

export const Status = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ isonline }) =>
    isonline === 'true' ? 'green' : 'red'};
`;

export const Avatar = styled.img`
  margin-left: 12px;
`;

export const Name = styled.p`
  margin-left: 12px;
`;
