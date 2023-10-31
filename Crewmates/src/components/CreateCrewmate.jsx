// CreateCrewmate.jsx
import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import './Createc.css';

function CreateCrewmate({ supabaseUrl, supabaseKey }) {
  const [crewmateName, setCrewmateName] = useState('');
  const [crewmateAttribute, setCrewmateAttribute] = useState('Engineer'); // Default attribute
  const [crewmateCategory, setCrewmateCategory] = useState('Dungeons and Dragons'); // Default category

  const supabase = createClient(supabaseUrl, supabaseKey);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Calculate the success metric based on the selected attribute
    let successMetric = 'Low';
    if (crewmateAttribute === 'Navigator') {
      successMetric = 'High';
    } else if (crewmateAttribute === 'Engineer') {
      successMetric = 'Medium';
    }

    // Send a POST request to add a new crewmate to the Supabase database
    const { data, error } = await supabase.from('crewmates').upsert([
      {
        name: crewmateName,
        attribute: crewmateAttribute,
        category: crewmateCategory,
        successMetric: successMetric, // Include the success metric
      },
    ]);

    if (error) {
      console.error('Error adding crewmate:', error);
    } else {
      // Clear form inputs after submission
      setCrewmateName('');
      setCrewmateAttribute('Engineer');
      setCrewmateCategory('Dungeons and Dragons');
    }
  };

  return (
    <div>
      <h1>Create Crewmate</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Crewmate Name"
          value={crewmateName}
          onChange={(e) => setCrewmateName(e.target.value)}
        />
        <select
          value={crewmateAttribute}
          onChange={(e) => setCrewmateAttribute(e.target.value)}
        >
          <option value="Engineer">Engineer</option>
          <option value="Medic">Medic</option>
          <option value="Navigator">Navigator</option>
        </select>
        <select
          value={crewmateCategory}
          onChange={(e) => setCrewmateCategory(e.target.value)}
        >
          <option value="Dungeons and Dragons">Dungeons and Dragons</option>
          <option value="Development Team Role">Development Team Role</option>
        </select>
        <button type="submit">Add Crewmate</button>
      </form>
    </div>
  );
}

export default CreateCrewmate;

