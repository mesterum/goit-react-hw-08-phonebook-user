import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import { lazy, Suspense, useEffect } from 'react';
import Navigation from "./Navigation/Navigation";
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/auth/operations';
import { useAuth } from '../hooks/useAuth';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
// Lazy-loaded components
const Home = lazy(() => import('../pages/Home/Home'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const ResetPasswordPage = lazy(() => import('pages/ResetPass/ResetPassword'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));

export const App = () => {
    const dispatch = useDispatch();
    const { isRefreshing } = useAuth();

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return (
        <main className={styles.mainApp}>
            <Navigation />
            {isRefreshing ? (
                <b>Refreshing user...</b>
            ) : (
                <div className={styles.content}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/login' element={<RestrictedRoute redirectTo='/contacts' component={<Login />} />} />
                            <Route path='/contacts' element={<PrivateRoute redirectTo='/login' component={<Contacts />} />} />
                            <Route path='/register' element={<RestrictedRoute redirectTo='/contacts' component={<Register />} />} />
                            <Route path='/password' element={<RestrictedRoute redirectTo='/contacts' component={<ResetPasswordPage />} />} />
                        </Routes>
                    </Suspense>
                </div>
            )}
        </main>
    );
};
