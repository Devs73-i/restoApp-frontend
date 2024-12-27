import { PacmanLoader } from 'react-spinners';

function Spinner() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '50vh' }}>
      <PacmanLoader color='#e88b77' />
      <p className='mt-3 txtSpinner text-uppercase display-5'>Loading...</p>
    </div>
  );
}

export default Spinner;
