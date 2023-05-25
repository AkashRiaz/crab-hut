import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://c8.alamy.com/comp/T6KGFE/404-error-page-not-found-vector-plug-graphic-background-T6KGFE.jpg")` }}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md font-semibold">
        <img className="w-20 h-20 ml-5" src="https://static.vecteezy.com/system/resources/thumbnails/012/042/292/small/warning-sign-icon-transparent-background-free-png.png" alt="" />
        <p className="text-lg">Oops!</p>
      <h1 className="mb-5 text-5xl md:text-7xl font-bold text-red-600 md:font-extrabold">404</h1>
      <p className="mb-5 text-lg"><i>Page {error.statusText || error.message}</i></p>
    </div>
  </div>
</div>
  );
};

export default ErrorPage;
