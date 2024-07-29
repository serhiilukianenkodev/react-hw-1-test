import PropTypes from 'prop-types';
import { Avatar, Card, Name, Status } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <Card>
    <Status isonline={isOnline.toString()}></Status>
    <Avatar src={avatar} alt={name} width="96" />
    <Name>{name}</Name>
  </Card>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
