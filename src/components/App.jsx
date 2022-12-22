import {Profile} from './Profile/Profile'
import user from '../user.json'


// console.log(user);
export const App = () => {
  return (
    <div 
      style={{
        height: '25rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        width: '450px',
        margin: 'auto',
        backgroundColor: '#E7ECF2',
        paddingTop: '60px',
        paddingBottom: '60px'
      }}
    >
      <Profile 
        key={user.username}
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
};
