import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

import React from 'react';
import {Home} from "./pages/Home";
import {Property} from "./pages/Property";
import {NotFound} from "./pages/NotFound";

export const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes >
                <Route path="/"  element={<Home />} />
                <Route path="/property"  element={<Property />} />
                <Route path="*"  element={<NotFound />} />
            </Routes>

        </BrowserRouter>
    );
};

