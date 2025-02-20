import React from "react";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:3001", // Change this to your API base URL
  withCredentials: true, // Ensures cookies are sent with requests
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
