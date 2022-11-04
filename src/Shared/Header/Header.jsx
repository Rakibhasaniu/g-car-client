import React from 'react';

const Header = () => {
    return (
        <div>
            <h2>This Is Header</h2>
            <button className="btn btn-active">Button</button>
            <button className="btn btn-active btn-primary">Button</button>
            <button className="btn btn-active btn-secondary">Button</button>
            <button className="btn btn-active btn-accent">Button</button>
            <button className="btn btn-active btn-ghost">Button</button>
            <button className="btn btn-active btn-link">Button</button>
        </div>
    );
};

export default Header;