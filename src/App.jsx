import React from 'react';
import Sidebar from './assets/components/Sidebar/Sidebar';
import Header from './assets/components/Header/Header';
import FileTable from './assets/components/FileTable/FileTable';
import './App.scss';

const App = () => {
    return (
        <div className="app">
            <Sidebar />
            <div className="main-content">
                <Header />
                <FileTable />
            </div>
        </div>
    );
}

export default App;