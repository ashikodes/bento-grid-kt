import './App.scss';
import AccountManage from './components/AccountManage/AccountManage';
import AudienceGrowth from './components/AudienceGrowth/AudienceGrowth';
import ContentAI from './components/ContentAI/ContentAI';
import ContentFast from './components/ContentFast/ContentFast';
import ContentPost from './components/ContentPost/ContentPost';
import ContentSchedule from './components/ContentSchedule/ContentSchedule';
import FollowerGrowth from './components/FollowerGrowth/FollowerGrowth';
import PostingSchedule from './components/PostingSchedule/PostingSchedule';

function App() {
  return (
    <div className='app-container'>
      <div className='row'>
        <div className='col-md-3'>
          <ContentPost />
          <ContentAI />
        </div>
        <div className='col-md-9'>
          <div className='row'>
            <div className='col-md-8'>
              <ContentFast />
              <div className='row mt-4'>
                <div className='col-md-6'>
                  <AccountManage />
                </div>
                <div className='col-md-6'>
                  <PostingSchedule />
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <ContentSchedule />
            </div>
          </div>
          <div className='row mt-4'>
            <div className='col-md-4'><AudienceGrowth /></div>
            <div className='col-md-8'><FollowerGrowth /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
