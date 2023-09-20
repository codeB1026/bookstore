import React, { useState, useEffect } from "react";
import axios from 'axios';

function BookTable() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/books')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  }, []);

  return (
    <div className="py-6   mt-10">
      <h2 className="text-2xl text-yellow-300">Book List</h2>
      <table className="table-auto py-4 w-full  mt-10">
        <thead className="w-full ">
          <tr className="text-yellow-200 ">
            <th className="px-4 py-2 ">Title</th>
            <th className="px-4 py-2 ">Author</th>
            <th className="px-4 py-2 ">Description</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id} className="text-white py-2">
              <td className="border px-4 py-2">{book.title}</td>
              <td className="border px-4 py-2">{book.author}</td>
              <td className="border px-4 py-2">{book.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookTable;
