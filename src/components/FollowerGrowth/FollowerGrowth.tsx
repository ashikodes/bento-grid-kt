import './FollowerGrowth.scss';

import { ReactComponent as Uptrend } from '../../assets/svg/uptrend.svg';

const FollowerGrowth = () => {
    return (
        <div className="follower-growth">
            <div className='growth-chart'>
                <div className='chart-top'>
                    <span className='title'>Follower Growth</span>
                    <div className='subtitle'>
                        <span className='value'>20,642</span>
                        <div className='growth-value'>+490%</div>
                    </div>
                </div>
                <div className='chart-bottom'>
                    {[4, 5, 6, 8, 9].map((val, index) => {
                        return (
                            <div 
                                style={{ height: `${(val / 10) * 5}rem` }} 
                                key={index} 
                                className='chart-bar'
                            >

                            </div>
                        );
                    })}
                </div>
                <div className='follower-trend'>
                    <Uptrend />
                    <div className='trend'>
                        <span className='trend-title'>Followers</span>
                        <div className='trend-numbers'>
                            <span className='value'>89,532</span>
                            <div className='trend-value'>+120%</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='growth-line'>Grow followers with non-stop content.</div>
        </div>
    );
};

export default FollowerGrowth;