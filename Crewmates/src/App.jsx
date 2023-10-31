import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import './App.css';
import SummaryPage from './components/SummaryPage';
import CreateCrewmate from './components/CreateCrewmate';
import EditCrewmate from './components/EditCrewmate';
import DeleteCrewmate from './components/DeleteCrewmate';
import CrewmateInfo from './components/CrewmateInfo';
import CrewPage from './components/CrewPage';


const supabaseUrl = 'https://vyvldqfxtkktozetvtgw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5dmxkcWZ4dGtrdG96ZXR2dGd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg3MTM1NjEsImV4cCI6MjAxNDI4OTU2MX0.7R41RrmKKUCjaoTkbgKAVkFT2sMQCe8b4nxOqR7AGQ8'

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Create Crewmate</Link>
          <Link to="/summary">Crewmate Summary</Link>
        </nav>
        <Routes>
          <Route path="/" element={<CreateCrewmate supabaseUrl={supabaseUrl} supabaseKey={supabaseKey} />} />
          <Route path="/summary" element={<SummaryPage supabaseUrl={supabaseUrl} supabaseKey={supabaseKey} />} />
          <Route path="/edit/:crewmateId" element={<EditCrewmate supabaseUrl={supabaseUrl} supabaseKey={supabaseKey} />} />
          <Route path="/delete/:crewmateId" element={<DeleteCrewmate supabaseUrl={supabaseUrl} supabaseKey={supabaseKey} />} />
          <Route path="/info/:crewmateId" element={<CrewmateInfo supabaseUrl={supabaseUrl} supabaseKey={supabaseKey} />} /> {/* Add the info route */}
          <Route path="/crew" element={<CrewPage supabaseUrl={supabaseUrl} supabaseKey={supabaseKey} />} /> {/* Add the crew page route */}
        </Routes>
      </Router>
    </div>
  );
}


export default App;