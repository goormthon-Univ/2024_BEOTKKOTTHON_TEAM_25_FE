import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  DailyMissonPage,
  FriendsListPage,
  FriendsPage,
  FriendsProfilePage,
  HomePage,
  LoadingAnalyze,
  LoadingFailure,
  LoadingSuccess,
  LoginPage,
  MyPage,
  MyRoomPage,
  OnboardingPage,
  RecordCategories,
  RecordsPage,
  StoreDetailPage,
  StorePage,
} from './pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/daily-mission' element={<DailyMissonPage />} />
        <Route path='/friends-list' element={<FriendsListPage />} />
        <Route path='/friends' element={<FriendsPage />} />
        <Route path='/friends-profile' element={<FriendsProfilePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/loading-analyze' element={<LoadingAnalyze />} />
        <Route path='/loading-failure' element={<LoadingFailure />} />
        <Route path='/loading-success' element={<LoadingSuccess />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/myroom' element={<MyRoomPage />} />
        <Route path='/' element={<OnboardingPage />} />
        <Route path='/record-categories' element={<RecordCategories />} />
        <Route path='/records' element={<RecordsPage />} />
        <Route path='/store' element={<StorePage />} />
        <Route path='/store/:categoryId' element={<StoreDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
