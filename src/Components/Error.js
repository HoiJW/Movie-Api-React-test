import { Link } from 'react-router-dom'


const ErrorPage = () => {
   return (
       <div>
           <h1>404!</h1>
           <p>Not all those who wander are lost, but you seem to be looking for a page that doesn't exist.</p>
           <Link to={`/`}>
               <h2>Back</h2>
           </Link>
       </div>
   )
}


export default ErrorPage;