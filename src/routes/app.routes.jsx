import { Routes, Route } from 'react-router-dom';

import { SignUp } from '../pages/SignUp';
import { SignIn } from '../pages/SignIn';

import { Home } from '../pages/Home';
import { ViewPlate } from '../pages/ViewPlate';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/register" element={<SignUp />} />
            <Route path="/" element={<SignIn />} />
            <Route path="/home" element={<Home />} />
            <Route path="/viewplate" element={<ViewPlate />} />
        </Routes>
    )
}