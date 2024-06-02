import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css'
import Navigation from "./Navigation/Navigation";
import Home from '../pages/Home/Home'
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import ResetPasswordPage from 'pages/ResetPass/ResetPassword';

export const App = () => {
 
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

 
  return (
    <main className={styles.mainApp}>
    <Navigation/>
    <div className={styles.content}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element= {<Register/>}/>
      <Route path='/password' element={<ResetPasswordPage/>}/>
    </Routes>
    </div>
    </main>
  );
};
