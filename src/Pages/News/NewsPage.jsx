
import Header from '../shared/Header/Header';

import RightSideNav from '../shared/RightSideNav';
import { useParams } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';

const NewsPage = () => {
    const {id}= useParams();


    return (
        <div>
                    <Header></Header>
                    <Navbar></Navbar>



             <div className='grid md:grid-cols-4 '>
                
                 <div className='md:col-span-3'>
          <h2> News detail</h2>
          <p>   </p>
                 </div>

                 <div>
                    <RightSideNav></RightSideNav>
                 </div>
                
                </div>       
           
        </div>
    );
};

export default NewsPage;