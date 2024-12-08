import './ContentSchedule.scss';

const ContentSchedule = () => {
    return (
        <div className="content-schedule">
            <p className='title'>Schedule to social media.</p>
            <div className='post-time-container'>
                <div className='post-time'>
                    <span className='post-header'>Best Time to Post</span>
                    <div className='divider' />
                    <div className='post-days'>
                        <span className='current-day'>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                        <span>Sun</span>
                    </div>
                    <div className='time-bar'>
                    {[
                        { time: '12a', value: 3 }, 
                        { time: '3a', value: 4 }, 
                        { time: '6a', value: 8, active: true },
                        { time: '9a', value: 6 },
                        { time: '12p', value: 5 },
                        { time: '3p', value: 7 },
                        { time: '6p', value: 6 },
                        { time: '9p', value: 5 }
                    ].map((entry, index) => {
                        return (
                            <div className='time-value-container' key={index}>
                                {entry.active && <div className='most-active'>Most Active</div>}
                                <div 
                                    className='time-value' 
                                    style={{ height: `${(entry.value / 10) * 8}rem` }} 
                                />
                            </div>
                        );
                    })}
                    </div>
                    <div className='time-entries'>
                        <span>12a</span>
                        <span>3a</span>
                        <span>6a</span>
                        <span>9a</span>
                        <span>12p</span>
                        <span>3p</span>
                        <span>6p</span>
                        <span>9p</span>
                    </div>
                </div>
            </div>
            <p className='subtitle'>Optimize post timings to publish content at the perfect time for your audience.</p>
        </div>
    );
}

export default ContentSchedule;