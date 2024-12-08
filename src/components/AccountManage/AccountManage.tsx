import './AccountManage.scss';
import { ReactComponent as Instagram } from '../../assets/svg/instagram.svg';
import { ReactComponent as Twitter } from '../../assets/svg/twitter.svg';

const AccountManage = () => {
    return (
        <div className="account-manage">
            <div className='account-list-holder'>
                <div className="account-list">
                    <div className="account-instagram">
                        <div className='icon-bg'><Instagram /></div>
                        <div className='account-details'>
                            <span className='account-name'>@YourCo</span>
                            <span className='account-numbers'>12K Followers</span>
                        </div>
                    </div>
                    <div className="account-x">
                        <div className='icon-bg'><Twitter /></div>
                        <div className='account-details'>
                            <span className='account-name'>@YourCo</span>
                            <span className='account-numbers'>8K Followers</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-line">
                Manage multiple accounts and platforms. 
            </div>
        </div>
    );
}

export default AccountManage;