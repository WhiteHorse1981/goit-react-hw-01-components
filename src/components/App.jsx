import css from 'components/App.module.css';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../components/data/user.json';
import data from '../components/data/data.json';
import friends from '../components/data/friends.json';
import transactions from '../components/data/transactions.json';


export const App = () => {
  return (  
    <div className={css.boxApp}>
      <Profile 
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
      </div>
  );
};
