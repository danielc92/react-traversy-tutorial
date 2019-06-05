import React from 'react';
import {Link} from 'react-router-dom';

// This is a functional component
// These should be used when only a render is called
const linkButton = "button is-small is-outlined is-link";

function Header () {
    return (
        <React.Fragment>
        <section className="navbar">
            <div className="content">
            <h3>Header Component</h3>
            <p>Pariatur sureincididunt ad sit consectetur eu ex non exercitation dolor tempor magna. Proident elit adipisicing et eiusmod ut sit ea in cupidatat commodo qui id. Et laborum do irure laboris magna voluptate voluptate culpa sit culpa sit consequat reprehenderit sint. Consectetur eiusmod cupidatat qui sint elit est deserunt dolore non excepteur veniam ex adipisicing commodo. Sunt velit esse duis qui elit voluptate minim aliquip non irure officia aliqua adipisicing.</p>
            </div>
            <div className="buttons">
                <Link className={linkButton} to="/">Visit the Main page</Link>
                <Link className={linkButton} to="/about">Visit the About page</Link>
            </div>
            
        </section>
        </React.Fragment>
    )

}

export default Header