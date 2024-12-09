import { useEffect, useState } from 'react';
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../amplify/data/resource";


import './App.scss';
import AccountManage from './components/AccountManage/AccountManage';
import AudienceGrowth from './components/AudienceGrowth/AudienceGrowth';
import ContentAI from './components/ContentAI/ContentAI';
import ContentFast from './components/ContentFast/ContentFast';
import ContentPost from './components/ContentPost/ContentPost';
import ContentSchedule from './components/ContentSchedule/ContentSchedule';
import FollowerGrowth from './components/FollowerGrowth/FollowerGrowth';
import PostingSchedule from './components/PostingSchedule/PostingSchedule';
import { APIData, DataContext } from './context';
import { Amplify } from 'aws-amplify';

function App() {
  const [data, setData] = useState<APIData>({} as APIData);

  useEffect(() => {
    async function fetchData() {
      if (process.env.NODE_ENV === 'development') {
        const outputs = await import('./amplify_outputs.json');
        Amplify.configure(outputs.default);
      }
      const client = generateClient<Schema>();
      const Review = await client.models.Review.list();
      const PostTime = await client.models.PostTime.list();
      const Account = await client.models.Account.list();
      setData({ Review: Review.data, PostTime: PostTime.data, Account: Account.data });
    }
    fetchData();
  }, []);
  return (
    <DataContext.Provider value={data}>
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
    </DataContext.Provider>
  );
}

export default App;
