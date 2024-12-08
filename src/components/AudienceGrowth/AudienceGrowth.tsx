import './AudienceGrowth.scss';

import memoji from '../../assets/images/memoji.png';
import memoji2 from '../../assets/images/memoji2.png';
import memoji3 from '../../assets/images/memoji3.png';

const AudienceGrowth = () => {
  return (
    <div className="audience-growth">
        <div className='growth-title'>
            <span className='growth-value'>{`>56%`}</span>
            <span className='growth-text'>faster audience growth</span>
        </div>
        <div className='audience-list'>
            <img className='memoji' src={memoji} alt='memoji' />
            <img className='memoji-2' src={memoji2} alt='memoji2' />
            <img className='memoji-3' src={memoji3} alt='memoji3' />
        </div>
    </div>
  );
}

export default AudienceGrowth;