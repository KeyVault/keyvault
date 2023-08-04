
import React, { ReactNode } from 'react';
import Navbar from '../partials/Navabar';

interface BaseLayoutProps {
    showNavBar: boolean;
    children?: ReactNode
}
const BaseLayout: React.FC<BaseLayoutProps> = ({
    showNavBar = true,
    children,
}) => {
    return(
        <>
            <main>
                <div className="app">{children}</div>

                {showNavBar && <Navbar />}
            </main> 
            
        </>
    );
};

export default BaseLayout;