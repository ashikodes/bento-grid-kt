import './ContentPost.scss';
import { ReactComponent as Logo } from '../../assets/svg/diamond.svg'
import { ReactComponent as Arrow } from '../../assets/svg/arrow.svg'

const ContentPost = () => {
  return (
    <div className="content-post">
        <p>Create and schedule content <span className="emp-post">quicker.</span></p>
        <button>Create Post <Logo /></button>
        <div className='under-button'>
            <Arrow />
        </div>
    </div>
  )
}

export default ContentPost;