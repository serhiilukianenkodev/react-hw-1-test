import styled from 'styled-components';

export const StatisticsSection = styled.section`
  width: 480px;
  background-color: lightblue;
  text-align: center;
  margin-top: 20px;
`;

export const Title = styled.h2`
  color: orange;
`;

export const StatsList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  width: 100%;
  padding: 12px;
  background-color: ${getRandomHexColor};
  color: white;
`;

export const Label = styled.span`
  margin-bottom: 8px;
`;

export const Percentage = styled.span`
  font-weight: bold;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
