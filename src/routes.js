import React from 'react';
import { BrowserRouter, Routes, Route }  from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/repository" element={<Repository/>}/>
            </Routes>
        </BrowserRouter>
    )
}