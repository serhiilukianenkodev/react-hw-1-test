import PropTypes from 'prop-types';
import {
  StatisticsSection,
  Title,
  StatsList,
  StatsItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => (
  <StatisticsSection>
    {title && <Title>{title}</Title>}

    <StatsList>
      {stats.map(({ id, label, percentage }) => (
        <StatsItem key={id}>
          <Label>{label} </Label>
          <Percentage>{percentage}%</Percentage>
        </StatsItem>
      ))}
    </StatsList>
  </StatisticsSection>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
