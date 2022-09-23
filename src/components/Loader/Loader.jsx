import { Audio } from 'react-loader-spinner';
const Loader = () => {
    return ( <div className='container-loader'>
    <Audio
    height="600"
    width="600"
    radius="20"
    color="red"
    ariaLabel="three-dots-loading"
    wrapperStyle
    wrapperClassName
  />
</div> );
}
 
export default Loader;