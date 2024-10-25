import React from "react";
import request from "../config/request"

export default function Todo({ id, title, description, getData }) {
  const deleteItem = () => {
    request.delete(`/todos/${id}`).then(() => {
      getData();
    });
  };

  const editItem = () => {
    request.put(`/todos/${id}`).then(() => {
      getData();
    });
  };

  return (
    <table className="table-auto w-[600px] border-collapse border m-auto my-4 border-gray-300">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="border border-gray-300 px-4 py-2">ID</th>
          <th className="border border-gray-300 px-4 py-2">Title</th>
          <th className="border border-gray-300 px-4 py-2">Description</th>
          <th className="border border-gray-300 px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white hover:bg-gray-50">
          <td className="border border-gray-300 px-4 py-2">{id}</td>
          <td className="border border-gray-300 px-4 py-2">{title}</td>
          <td className="border border-gray-300 px-4 py-2">{description}</td>
          <td>
            <button
              onClick={deleteItem}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Delete
            </button>
          </td>
          <td>
            <button
              onClick={editItem}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Edit
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
