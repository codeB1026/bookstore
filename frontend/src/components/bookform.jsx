import React, { useState } from "react";
import axios from 'axios';

export default function BookForm() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/books/add', formData)
      .then(() => alert('Book added')
      
      )
      .catch((err) => alert(err));
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <h2 className="text-4xl text-white mb-4">Add a Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full px-3 py-2 border-[2px] border-yellow-200 focus:outline-none rounded mb-4 "
        />
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Author"
          className="w-full px-3 py-2 border-[2px] border-yellow-200 focus:outline-none rounded mb-4 "
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full px-3 py-2 border-[2px] border-yellow-200 focus:outline-none rounded mb-4 "
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-slate-500 hover:text-white">
          Submit
        </button>
      </form>

    </div>
  );
}
