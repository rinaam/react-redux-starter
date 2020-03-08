import React from 'react';
import { A } from 'hookrouter';
import headerRoutes from './HeaderComponent.helper';
import './HeaderComponent.scss';

const HeaderComponent = () => (
  <div className="HeaderComponent">
    <nav className="nav-bar">
      {headerRoutes.map((route) => (
        <A href={route.to} key={route.id} className="nav-bar_item">
          {route.label}
        </A>
      ))}
    </nav>
  </div>
);


export default HeaderComponent;
