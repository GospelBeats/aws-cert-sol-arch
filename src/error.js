import { Link } from 'react-router-dom';

function NoMatch() {
    return (
      <div>
       <p>Hmmm... You seem to be lost</p> 
       <button><Link to="/">Go Home</Link></button>
      </div>
    );
  }
  
  export default NoMatch;