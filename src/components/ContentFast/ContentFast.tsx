import { ReactComponent as Logo } from '../../assets/svg/star.svg';
import './ContentFast.scss';

const ContentFast = () => {
    return (
        <div className="content-fast">
            <p>Social Media <span className='emp-text'>10x</span> <i>Faster</i> with AI</p>
            <div className="star-rating">
                <Logo />
                <Logo />
                <Logo />
                <Logo />
                <Logo />
            </div>
            <span className='subtitle'>Over 4,000 5-star reviews</span>
        </div>
    );
}

export default ContentFast;