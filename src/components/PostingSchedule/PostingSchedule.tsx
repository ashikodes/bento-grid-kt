import './PostingSchedule.scss';
import { ReactComponent as Check } from '../../assets/svg/check.svg';

const PostingSchedule = () => {
    return (
        <div className="posting-schedule">
            <span className="posting-title">Maintain a consistent posting schedule.</span>
            <div className='posting-calendar-container'>
                <div className='posting-calendar'>
                    <div className='calendar-head'>
                        <span>August 2024</span>
                        <span>Week1</span>
                    </div>
                    <div className='calendar-body'>
                        <div className='body-row'>
                            <div className='body-check'><Check /></div>
                            <div className='body-check'><Check /></div>
                            <div className='body-check'><Check /></div>
                            <div className='body-check'><Check /></div>
                        </div>
                        <div className='body-row'>
                            <div className='body-entry'></div>
                            <div className='body-entry'></div>
                            <div className='body-entry'></div>
                            <div className='body-entry'></div>
                        </div>
                        <div className='body-row'>
                            <div className='body-entry'></div>
                            <div className='body-entry'></div>
                            <div className='body-entry'></div>
                            <div className='body-entry'></div>
                        </div>
                        <div className='body-row'>
                            <div className='body-entry'></div>
                            <div className='body-entry'></div>
                            <div className='body-entry'></div>
                            <div className='body-entry'></div>
                        </div>
                        <div className='body-row'>
                            <div className='body-entry'></div>
                            <div className='body-entry'></div>
                            <div className='body-entry'></div>
                            <div className='body-entry'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostingSchedule;