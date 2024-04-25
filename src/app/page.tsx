"use client";
import * as React from "react";
import Link from "next/link";
import axios from "axios";

const Home = () => {
  async function fetchData() {
    const data = await axios.get("http://localhost:3000/api/comments");
    return data;
  }
  React.useEffect(() => {
    fetchData().then((res) => {
      console.log(res.data);
    });
  }, []);
  return (
    <>
      <h1>home Page</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
    </>
  );
};

export default Home;
