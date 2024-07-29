import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

import user from '../data/user.json';
import statistics from '../data/data.json';

const { username, tag, location, avatar, stats } = user;

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        name={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      ></Profile>

      <Statistics title="Upload stats" stats={statistics}></Statistics>
    </div>
  );
};
