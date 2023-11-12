/* eslint-disable no-unused-vars */
import React from 'react'

function Outputs() {
  return (
    <div className="outputs">
      <div className="searchBlock">
        <input
          className="py-5 px-3 rounded-md"
          type="text"
          placeholder="search"
          id="search"
        />
      </div>
      <div className="btnSearch">
        <button className="bg-teal-800 m-1" id="searchTitle">
          Search By Title
        </button>
        <button className="bg-teal-800 m-1" id="searchCategory">
          Search By Category
        </button>
      </div>
      <div id="deleteAll"></div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>price</th>
            <th>taxes</th>

            <th>ads</th>
            <th>discount</th>
            <th>total</th>

            <th>catagory</th>
            <th>update</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody id="tbody">
          <tr>
            <td>fsdsfd</td>
            <td>dsssefr</td>
            <td>dsssefr</td>
            <td>dsssefr</td>
            <td>dsssefr</td>
            <td>dsssefr</td>
            <td>dsssefr</td>
            <td>dsssefr</td>
            <td>
              <button id="update">update</button>
            </td>
            <td>
              <button id="delete">delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Outputs
