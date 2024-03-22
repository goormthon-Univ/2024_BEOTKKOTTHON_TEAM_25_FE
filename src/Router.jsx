import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  CharacterNameSettingPage,
  DailyMissonPage,
  FriendsListPage,
  FriendsPage,
  HomePage,
  LoginPage,
  MyPage,
  OnboardingPage,
  Recordspage,
  RegisterPage,
  StorePage,
  StoreDetailPage,
} from './pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/character-name-setting' element={<CharacterNameSettingPage />} />
        <Route path='/daily-mission' element={<DailyMissonPage />} />
        <Route path='/friends-list' element={<FriendsListPage />} />
        <Route path='/friends' element={<FriendsPage />} />
        <Route path='/' element={<div>🌏 온 지구 : Own Earth 🌏</div>} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/onboarding' element={<OnboardingPage />} />
        <Route path='/records' element={<Recordspage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/store' element={<StorePage />} />
        <Route path='/store/:categoryId' element={<StoreDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
