import React from "react";
import "../index.css";
import { Options } from "./Data";
const Footer = () => {
  return (
    <>
      <footer className="section footer">
        <ul className="footer-links">
          {Options.map((option) => {
            return (
              <li>
                <a href={option.add} className="footer-link">
                  {" "}
                  {option.name}{" "}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="footer-icons">
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              rel="noreferrer"
              target="_blank"
              className="footer-icon"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
            >
              <i className="fab fa-squarespace"></i>
            </a>
          </li>
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date"> {new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
