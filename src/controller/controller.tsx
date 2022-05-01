import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from '../components/Header';
import MovieList from '../pages/MovieList';
import MovieDetail from '../pages/MovieDetail';

export default function Controller() {
  return (
    <HashRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie-detail/:id" element={<MovieDetail />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
