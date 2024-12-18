import "./App.css";
import Ellipse1 from "/src/assets/Ellipse1.svg";
import Ellipse2 from "/src/assets/Ellipse2.svg";
import Ellipse3 from "/src/assets/Ellipse3.svg";
import Ellipse4 from "/src/assets/Ellipse4.svg";

const SideComponent = () => {
  return (
    <div className="side-container">
      <p className="side-text">Name</p>
      <div className="square-side"></div>
      <div className="square-side"></div>
      <div className="circle-side"></div>
      <div className="divider-side"></div>
      <h2 className="storage-title">Storage</h2>

      <img src={Ellipse1} alt="Ellipse" className="svg-image-1" />
      <img src={Ellipse2} alt="Ellipse" className="svg-image-2" />
      <img src={Ellipse3} alt="Ellipse" className="svg-image-3" />
      <img src={Ellipse4} alt="Ellipse" className="svg-image-4" />

      <div className="circle-white"></div>
      <h2 className="percentage-text">85 %</h2>
      <p className="used-text">Used</p>
      <p className="storage-details">420.2 GB of 500 GB used</p>

      <div className="storage-list">
        <div className="storage-list-row">
          <div className="square-icon orange"></div>
          <div className="content">
            <p className="file-type">Documents</p>
            <p className="file-count">720 files</p>
          </div>
          <div className="storage-value">
            <span>200 GB</span>
          </div>
        </div>
        <div className="storage-list-row">
          <div className="square-icon blue"></div>
          <div className="content">
            <p className="file-type">Documents</p>
            <p className="file-count">720 files</p>
          </div>
          <div className="storage-value">
            <span>125 GB</span>
          </div>
        </div>
        <div className="storage-list-row">
          <div className="square-icon green"></div>
          <div className="content">
            <p className="file-type">Documents</p>
            <p className="file-count">720 files</p>
          </div>
          <div className="storage-value">
            <span>75 GB</span>
          </div>
        </div>
        <div className="storage-list-row">
          <div className="square-icon gray"></div>
          <div className="content">
            <p className="file-type">Documents</p>
            <p className="file-count">720 files</p>
          </div>
          <div className="storage-value">
            <span>50 GB</span>
          </div>
        </div>
      </div>
      <div className="upgrade-container">
        <button className="gradient-button-2"></button>
        <p className="upgrade-title">Buy more space now!</p>
        <p className="upgrade-subtitle">Upgrade to cloud premium</p>
        <button className="upgrade-button">Upgrade Account!</button>
      </div>
    </div>
  );
};

export default SideComponent;
//-
