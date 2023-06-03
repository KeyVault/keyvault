
import React, { ReactNode } from 'react';
import Navbar from '../partials/Navabar';

interface Props {
    children?: ReactNode
}
const Layout =({children, ...props}: Props) =>{
    return(
        <>
            <main>{children}</main> 
            <div>
                <Navbar />
            </div>
            
        </>
    )
}

export default Layout;