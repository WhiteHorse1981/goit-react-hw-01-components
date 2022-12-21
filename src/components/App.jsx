import {Profile} from './Profile/Profile'
import user from '../user.json'
export const App = () => {
  return (
    <div 
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile 
        key={user.username}
        imgAvatar={user.avatar}
        userName={user.username}
        socialTag={user.tag}
        locationUser={user.location}
        activityFollowers={user.stats.followers}
        activityViews={user.stats.views}
        activityLikes={user.stats.likes}
      />
      </div>
  );
};
