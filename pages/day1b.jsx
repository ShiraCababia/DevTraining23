import React from 'react';
import moshiko from './day1b.module.css';

export default function Day1b() {
  return (
    <div className={moshiko.container}>
      <h1>Day 1 Bonus Challenge</h1>
      <div className={moshiko.navBar}>
        <div className={moshiko.navBarItem}>Blog</div>
        <div className={moshiko.navBarItem}>Work</div>
        <div className={moshiko.navBarItem}>About</div>
        <div className={moshiko.navBarItem}>Contact</div>
      </div>
    </div>
  );
}
