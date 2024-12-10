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

const client = generateClient<Schema>();

function App() {
  const [data, setData] = useState<APIData>({} as APIData);

  useEffect(() => {
    async function fetchData() {
      const Review = await client.models.Review.list();
      const PostTime = await client.models.PostTime.list();
      const Account = await client.models.Account.list();
      setData({ Review: Review.data, PostTime: PostTime.data, Account: Account.data });
    }
    fetchData();
  }, []);
  return (
    <DataContext.Provider value={data}>
      <div className='app-container my-5'>
        <div className='row'>
          <div className='col-lg-3 col-md-12 order-last order-lg-first'>
            <div className="d-lg-block row mt-lg-0 mt-4">
              <div className="col-md-6 col-lg-12">
                <ContentPost />
              </div>
              <div className="col-md-6 col-lg-12 mt-lg-4 mt-md-0 mt-4">
                <ContentAI />
              </div>
            </div>
          </div>
          <div className='col-lg-9 col-sm-12'>
            <div className='row'>
              <div className='col-sm-12 col-lg-8'>
                <ContentFast />
                <div className='row'>
                  <div className='col-12 col-md-6 mt-4'>
                    <AccountManage />
                  </div>
                  <div className='col-12 col-md-6 mt-4'>
                    <PostingSchedule />
                  </div>
                </div>
              </div>
              <div className='col-sm-12 col-lg-4 mt-lg-0 mt-4'>
                <ContentSchedule />
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-4 col-sm-12 mt-4 order-last order-lg-first'>
                <AudienceGrowth />
              </div>
              <div className='col-lg-8 col-md-12 mt-4'>
                <FollowerGrowth />
              </div>
            </div>
          </div>
        </div>

      </div>
    </DataContext.Provider>
  );
}

export default App;
