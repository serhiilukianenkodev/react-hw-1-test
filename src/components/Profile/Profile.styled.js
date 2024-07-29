import styled from 'styled-components';

export const Container = styled.div`
  min-width: 480px;

  margin-top: 30px;
  border: 5px solid gray;
  border-radius: 10px;
  overflow: hidden;
`;

export const Description = styled.div`
  text-align: center;
  padding: 36px;
`;

export const Avatar = styled.img`
  display: block;
  margin: 0 auto;

  display: block;
  border-radius: 50%;
  width: 200px;
`;

export const Name = styled.p`
  padding: 0;
  margin: 15px 0 0 0;
  font-weight: 700;
`;

export const Tag = styled.p`
  margin: 15px 0 0 0;
  color: blueviolet;
`;

export const Location = styled.p`
  font-style: italic;
  margin: 15px 0 0 0;
`;

export const Stats = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 24px 0 0 0;
  background-color: #e0d9d9;
`;

export const StatItem = styled.li`
  text-align: center;
  flex-grow: 1;
  display: flex;

  padding: 5%;
  border-top: 2px solid darkgrey;
  flex-direction: column;

  &:not(:last-child) {
    border-right: 2px solid darkgrey;
  }
`;

export const Label = styled.span`
  font-size: 24px;
`;
export const Quantity = styled.span`
  font-weight: bold;
`;
