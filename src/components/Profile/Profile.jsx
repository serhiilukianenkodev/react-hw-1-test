import PropTypes from 'prop-types';

import {
  Container,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  StatItem,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <Container>
    <Description>
      <Avatar src={avatar} alt={name} />
      <Name>{name}</Name>
      <Tag>{tag}</Tag>
      <Location>{location}</Location>
    </Description>

    <Stats>
      <StatItem>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </StatItem>
      <StatItem>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </StatItem>
      <StatItem>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
      </StatItem>
    </Stats>
  </Container>
);

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
