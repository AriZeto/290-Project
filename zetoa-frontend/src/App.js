import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import logo from './logo.svg';

import './App.css';
import Nav from './components/Nav.js';
import products from './data/products.js';
import HomePage from './pages/HomePage.js';
import GalleryPage from './pages/GalleryPage.js';
import StaffPage from './pages/StaffPage.js';
import OrderPage from './pages/OrderPage.js';
import LogPage from './pages/LogPage.js';
import EditPage from './pages/EditPage.js';
import CreatePage from './pages/CreatePage.js';
import TopicsPage from './pages/TopicsPage.js';

function App() {
  const [recipe, setRecipe] = useState([])
  return (
      <div>
        <BrowserRouter>
    
        <header className="header-site">
          <h1>Ariel Zeto's Web Development Site.</h1>
        </header>

        <Nav />

        <main>

          <section className="article-site">

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/log" element={<LogPage setRecipeToEdit={setRecipe} />} />
                <Route path="/log-recipe" element={<CreatePage />} />
                <Route path="/update-recipe" element={<EditPage recipe={recipe} />} />
                <Route path="/topic" element={<TopicsPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/order" element={<OrderPage items={products} />} />
                <Route path="/staff" element={<StaffPage />} />
            </Routes>

          </section>

        </main>

        <footer>
                <p>&copy; 2023 Ari Zeto</p>
        </footer>

    </BrowserRouter>
    </div>
  );
}

export default App;
