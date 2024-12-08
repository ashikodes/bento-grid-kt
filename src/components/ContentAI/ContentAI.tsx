import './ContentAI.scss';

import memoji from '../../assets/images/memoji.png';
import { ReactComponent as Diamond } from '../../assets/svg/diamond.svg';
import { ReactComponent as Uptrend } from '../../assets/svg/uptrend.svg';

const ContentAI = () => {
    return (
        <div className="content-ai mt-4">
            <div className="content-header">Write your content using AI.</div>
            <div className='content-body'>
                <div className='content-prompt'>
                    <div className='prompt-text'>Give me a 5 tips to grow my follower on Insta!</div>
                    <img src={memoji} alt='memoji' />
                </div>
                <div className='content-prompt'>
                    <div className='prompt-icon'><Diamond /></div>
                    <div className='prompt-text-ai'>
                        <div className='text-ai'>
                            Certainly! Here are five tips to help you grow your Instagram account: Optimize Your Profile: Make sure your Instagram profile is complete and engaging. Use a clear and recognizable profile picture, write a compelling bio that describes who you are or what your account is about, and include a link to your website or relevant content.
                        </div>
                    </div>
                </div>
                <div className='uptrend-content'>
                    <Uptrend />
                </div>
            </div>
        </div>
    );
};

export default ContentAI;