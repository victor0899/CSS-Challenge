import { useState } from "react";
import "./App.css";

const MainContent = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <main className="main-content">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="search-bar"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <h2 className="content-title">Recently Used</h2>

      <div className="square-one"></div>
      <div className="square-two"></div>
      <div className="cards-container">
        {/* Card 1 */}

        <div className="card">
          <div className="menu-dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <div className="square-back"></div>
          <div className="square-front"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <p className="card-title">App Project</p>
          <p className="card-date">Created: 20.02.2020</p>
        </div>

        {/* Card 2 */}
        <div className="card">
          <div className="menu-dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <div className="square-back"></div>
          <div className="square-front"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <p className="card-title">Project: fitbit</p>
          <p className="card-date">Created: 28.02.2020</p>
        </div>

        {/* Card 3 */}
        <div className="card">
          <div className="menu-dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <div className="square-back"></div>
          <div className="square-front"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <p className="card-title">Client Documents</p>
          <p className="card-date">Created: 4.03.2020</p>
        </div>
      </div>

      <h2 className="recent-files">Recent files</h2>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th className="table-header">Name</th>
              <th className="table-header">Members</th>
              <th className="table-header">Last Modified</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row">
              <td>
                <div className="name-cell">
                  <div className="color-square orange"></div>
                  <span className="project-name">Travel Landing Page</span>
                </div>
              </td>
              <td>
                <span className="table-text">5 members</span>
              </td>
              <td>
                <span className="table-text">Mar 8, 2020</span>
              </td>
            </tr>

            <tr className="table-row">
              <td>
                <div className="name-cell">
                  <div className="color-square green"></div>
                  <span className="project-name">True Photos</span>
                </div>
              </td>
              <td>
                <span className="table-text">12 members</span>
              </td>
              <td>
                <span className="table-text">Mar 8, 2020</span>
              </td>
            </tr>

            <tr className="table-row">
              <td>
                <div className="name-cell">
                  <div className="color-square red"></div>
                  <span className="project-name">Dashboard Structure</span>
                </div>
              </td>
              <td>
                <span className="table-text">10 members</span>
              </td>
              <td>
                <span className="table-text">Mar 9, 2020</span>
              </td>
            </tr>

            <tr className="table-row">
              <td>
                <div className="name-cell">
                  <div className="color-square orange"></div>
                  <span className="project-name">Character Illustration</span>
                </div>
              </td>
              <td>
                <span className="table-text">3 members</span>
              </td>
              <td>
                <span className="table-text">Mar 10, 2020</span>
              </td>
            </tr>
          </tbody>
        </table>
        <h2 className="share-heading">Share with me</h2>
      </div>
      <div className="cards-section">
        {/* Card 1 */}
        <div className="share-card card-1">
          <div className="rectangle"></div>
          <p className="card-title-sm">Landing Page</p>
          <p className="card-date-sm">Created: 20.02.2020</p>
          <div className="share-circle share-circle-1"></div>
          <div className="share-circle share-circle-2"></div>
        </div>

        {/* Card 2 */}
        <div className="share-card card-2">
          <div className="rectangle"></div>
          <p className="card-title-sm">Illustration Pack</p>
          <p className="card-date-sm">Created: 20.02.2020</p>
          <div className="share-circle share-circle-1"></div>
          <div className="share-circle share-circle-2"></div>
          <div className="share-circle share-circle-3"></div>
        </div>

        {/* Card 3 */}
        <div className="share-card card-3">
          <div className="rectangle"></div>
          <p className="card-title-sm">CV Design</p>
          <p className="card-date-sm">Created: 20.02.2020</p>
          <div className="share-circle share-circle-1"></div>
          <div className="share-circle share-circle-2"></div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
