// import React from 'react'
import { useState } from 'react'; //useState is a hook that allows you to manage state within a functional component
import Nav from './components/Nav'
import Btn from './components/Btn'
import Card from './components/Card'

const App = () => {
  // Button names
  const btn1 = 'All';
  const btn2 = 'Active';
  const btn3 = 'Inactive';

  // Card data
  const cardData = [
    { img: './logo-devlens.svg', header: 'DevLens', description: 'Quickly inspect page layouts and visualize element boundaries.', status: 'Active' },
    { img: './logo-style-spy.svg', header: 'StyleSpy', description: 'Instantly analyze and copy CSS from any webpage element.', status: 'Active' },
    { img: './logo-speed-boost.svg', header: 'SpeedBoost', description: 'Optimizes browser resource usage to accelerate page loading.', status: 'Inactive' },
    { img: './logo-json-wizard.svg', header: 'JSONWizard', description: 'Formats, validates, and prettifies JSON responses in-browser.', status: 'Active' },
    { img: './logo-tab-master-pro.svg', header: 'TabMaster Pro', description: 'Organizes browser tabs into groups and sessions.', status: 'Active' },
    { img: './logo-viewport-buddy.svg', header: 'ViewportBuddy', description: 'Simulates various screen resolutions directly within the browser.', status: 'Inactive' },
    { img: './logo-markup-notes.svg', header: 'Markup Notes', description: 'Enables annotation and notes directly onto webpages for collaborative debugging.', status: 'Active' },
    { img: './logo-grid-guides.svg', header: 'GridGuides', description: 'Overlay customizable grids and alignment guides on any webpage.', status: 'Inactive' },
    { img: './logo-palette-picker.svg', header: 'Palette Picker', description: 'Instantly extracts color palettes from any webpage.', status: 'Active' },
    { img: './logo-link-checker.svg', header: 'LinkChecker', description: 'Scans and highlights broken links on any page.', status: 'Active' },
    { img: './logo-dom-snapshot.svg', header: 'DOM Snapshot', description: 'Capture and export DOM structures quickly.', status: 'Inactive' },
    { img: './logo-console-plus.svg', header: 'ConsolePlus', description: 'Enhanced developer console with advanced filtering and logging.', status: 'Active' },
  ];

  // Dark Mode
  const [darkMode, setDarkMode] = useState(true);
  const toggleTheme = () => setDarkMode(prev => !prev);

  // Filter state
  const [filter, setFilter] = useState('All'); // 'All', 'Active', or 'Inactive'

  // Filter cards based on the selected filter
  const filteredCards = cardData.filter(card => {
    if (filter === 'All') return true;
    return card.status === filter;
  });

  return (
    <>
      <div className={`h-full w-full min-h-screen transition-all duration-300 ${darkMode ? 'bg-[#050a1e]' : 'bg-white'}`}>
        <Nav darkMode={darkMode} toggleTheme={toggleTheme} />

        <h1 className={`text-3xl mt-8 ml-24 lg:float-start ${darkMode ? 'text-white' : 'text-black'}`}>
          Extensions List
        </h1>

        <div className='flex justify-center gap-8 mt-5 lg:ml-[60rem]'>
          <Btn className='bg-[#f35a54]' name={btn1} onClick={() => setFilter('All')} />
          <Btn name={btn2} onClick={() => setFilter('Active')} />
          <Btn name={btn3} onClick={() => setFilter('Inactive')} />
        </div>

        <div className='lg:grid lg:grid-cols-3 lg:grid-rows-3 lg:mt-5'>
          {filteredCards.map((card, index) => (
            <Card
              key={index}
              darkMode={darkMode}
              Image={card.img}
              header={card.header}
              das={card.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;


/*import { useState } from 'react';
import Nav from './components/Nav'
import Btn from './components/Btn'
import Card from './components/Card'

const App = () => {
  //btn
  const btn1 = 'All'
  const btn2 = 'Active'
  const btn3 = 'Inactive'

  //card
  const img1 = '/src/images/logo-devlens.svg'
  const h1 = 'DevLens'
  const p1 = 'Quickly inspect page layouts and visualize element boundaries.'

  const img2 = '/src/images/logo-style-spy.svg'
  const h2 = 'StyleSpy'
  const p2 = 'Instantly analyze and copy CSS from any webpage element.'

  const img3 = '/src/images/logo-speed-boost.svg'
  const h3 = 'Extensions'
  const p3 = 'Optimizes browser resource usage to accelerate page loading.'
  
  const img4 = '/src/images/logo-json-wizard.svg'
  const h4 = 'JSONWizard'
  const p4 = 'Formats, validates, and prettifies JSON responses in-browser.'

  const img5 = '/src/images/logo-tab-master-pro.svg'
  const h5 = 'TabMaster Pro'
  const p5 = 'Organizes browser tabs into groups and sessions.'

  const img6 = '/src/images/logo-viewport-buddy.svg'
  const h6 = ' ViewportBuddy'
  const p6 = 'Simulates various screen resolutions directly within the browser.'

  const img7 = '/src/images/logo-markup-notes.svg'
  const h7 = 'Markup Notes'
  const p7 = 'Enables annotation and notes directly onto webpages for collaborative debugging.'

  const img8 = '/src/images/logo-grid-guides.svg'
  const h8 = 'GridGuides'
  const p8 = 'Overlay customizable grids and alignment guides on any webpage.'

  const img9 = '/src/images/logo-palette-picker.svg'
  const h9 = 'Palette Picker'
  const p9 = ' Instantly extracts color palettes from any webpage.'

  const img10 = '/src/images/logo-link-checker.svg'
  const h10 = 'LinkChecker'
  const p10 = 'Scans and highlights broken links on any page.'

  const img11 = '/src/images/logo-dom-snapshot.svg'
  const h11 = 'DOM Snapshot'
  const p11 = 'Capture and export DOM structures quickly.'

  const img12 = '/src/images/logo-console-plus.svg'
  const h12 = 'ConsolePlus'
  const p12 = 'Enhanced developer console with advanced filtering and logging.'

//darkmode
  const [darkMode, setDarkMode] = useState(true);
  const toggleTheme = () => setDarkMode(prev => !prev); // prev is the previous state value

  return (
    <>
    <div className={h-full w-full min-h-screen transition-all duration-300 ${darkMode ? 'bg-[#050a1e]' : 'bg-white'}}>
      <Nav darkMode={darkMode} toggleTheme={toggleTheme} />

      <h1 className={text-3xl mt-8 ml-24 lg:float-start ${darkMode ? 'text-white' : 'text-black'}}>
        Extensions List
      </h1>

      <div className='flex justify-center gap-8 mt-5 lg:ml-[75rem]'>
        <Btn className='bg-[#f35a54]' name={btn1} />
        <Btn name={btn2} />
        <Btn name={btn3} />
      </div>

      <div className='lg:grid lg:grid-cols-3 lg:grid-rows-3 lg:mt-5'>
      <Card darkMode={darkMode} Image = {img1} header = {h1} das = {p1}/>
      <Card darkMode={darkMode} Image = {img2} header = {h2} das = {p2}/>
      <Card darkMode={darkMode} Image = {img3} header = {h3} das = {p3}/>
      <Card darkMode={darkMode} Image = {img4} header = {h4} das = {p4}/>
      <Card darkMode={darkMode} Image = {img5} header = {h5} das = {p5}/>
      <Card darkMode={darkMode} Image = {img6} header = {h6} das = {p6}/>
      <Card darkMode={darkMode} Image = {img7} header = {h7} das = {p7}/>
      <Card darkMode={darkMode} Image = {img8} header = {h8} das = {p8}/>
      <Card darkMode={darkMode} Image = {img9} header = {h9} das = {p9}/>
      <Card darkMode={darkMode} Image = {img10} header = {h10} das = {p10}/>
      <Card darkMode={darkMode} Image = {img11} header = {h11} das = {p11}/>
      <Card darkMode={darkMode} Image = {img12} header = {h12} das = {p12}/>
      </div>
    </div>
  </>
  )
}

export default App */