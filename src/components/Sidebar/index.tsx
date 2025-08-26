import React, { useState, useRef } from "react";
import "./styles.css";
import homeIcon from "../../assets/Home.svg";
import analyticsIcon from "../../assets/Chart_pin.svg";

const Sidebar = () => {
  const [width, setWidth] = useState(200);
  const [collapsed, setCollapsed] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const minWidth = 150;
  const maxWidth = 250;
  const collapsedWidth = 30;

  const startResizing = (e: React.MouseEvent) => {
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = width;

    const doDrag = (moveEvent: MouseEvent) => {
      const newWidth = startWidth + (moveEvent.clientX - startX);
      if (collapsed) {
        return;
      }
      if (newWidth <= minWidth) {
        setCollapsed(true);
        setWidth(collapsedWidth);
        return;
      } else if (newWidth <= maxWidth) {
        setCollapsed(false);
        setWidth(newWidth);
      }
    };

    const stopDrag = () => {
      document.removeEventListener("mousemove", doDrag);
      document.removeEventListener("mouseup", stopDrag);
    };

    document.addEventListener("mousemove", doDrag);
    document.addEventListener("mouseup", stopDrag);
  };

  return (
    <div
      className="sidebar"
      ref={sidebarRef}
      onMouseDown={startResizing}
      style={{ width }}
      onClick={() => {
        if (collapsed) {
          setCollapsed(false);
          setWidth(minWidth);
        }
      }}
    >
      {collapsed ? (
        <div className="sidebar-item-list">
          <div className="sidebar-item active">
            <img src={homeIcon} />
          </div>
          <div className="sidebar-item">
            <img src={analyticsIcon} />
          </div>
        </div>
      ) : (
        <>
          <div className="sidebar-placeholder">PLACEHOLDER</div>
          <div className="sidebar-item-list">
            <div className="sidebar-item active">
              <img src={homeIcon} /> Home
            </div>
            <div className="sidebar-item">
              <img src={analyticsIcon} /> Analytics
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
