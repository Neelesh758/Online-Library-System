import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

export default function ErrorPage() {
  return (
    <div className="error-container">
      <h1 className="h1">404</h1>
      <h2 className="h2">Oops! Page Not Found</h2>
      <p className="p">The page you're looking for doesn't exist.</p>
      <Link to="/" className="home-button">Go to Homepage</Link>
    </div>
  );
}