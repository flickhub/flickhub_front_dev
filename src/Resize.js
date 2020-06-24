import React from 'react';
import {useMediaQuery} from 'react-responsive';
import Cards from "./Cards"
import Routers from './Routers';
import MobileRouters from './mobile/MobileRouters';
import Flickhub from './Flickhub';

const Resize = () => {
    const mobile = useMediaQuery({minWidth: 600})

    return (
      <div>
        {/* <MediaQuery maxWidth={1400}> <Routers /></MediaQuery> */}
        {/* <MediaQuery maxWidth={700}><h1 style={{color: "white"}}>MOBILE</h1></MediaQuery> */}
        {mobile ? <Routers /> : <MobileRouters />}
      </div>
    );
}

export default Resize