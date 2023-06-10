"use client";
import React, { useState, useEffect } from "react";
import useSwr from "swr";

const Dashboard = () => {
  // const [data, setData] = useState();
  // const [error, setError] = useState();
  // const [isLoading, setIsLoading] = useState();

  // useEffect(() => {
  //   const getUsers = async () => {
  //     setIsLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/users");

  //     if (!res.ok) {
  //       setError(true);
  //     }

  //     setData(await res.json());
  //     setIsLoading(false);
  //   };

  //   getUsers();
  // }, []);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSwr(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );
  console.log(data);
  return (
    <h1 className="text-5xl text-green-400 font font-extralight text-center">
      Dashboard
    </h1>
  );
};

export default Dashboard;
