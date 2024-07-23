import React from "react";
import { Route, Routes } from "react-router-dom";
import Todo from "./views/todo/todo";
import Optimization from "./views/optimization/optimization";
import UseFetch from "./views/useFetch/useFetch";
import OptimizationAfter from "./views/optimizationAfter/optimizationAfter";
import NotFound from "./views/notFound/notFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<>...</>}>
            <Todo />
          </React.Suspense>
        }
      />
      <Route
        path="/optimization-before"
        element={
          <React.Suspense fallback={<>...</>}>
            <Optimization />
          </React.Suspense>
        }
      />
      <Route
        path="/optimization-after"
        element={
          <React.Suspense fallback={<>...</>}>
            <OptimizationAfter />
          </React.Suspense>
        }
      />
      <Route
        path="/use-fetch"
        element={
          <React.Suspense fallback={<>...</>}>
            <UseFetch />
          </React.Suspense>
        }
      />
      <Route
        path="*"
        element={
          <React.Suspense fallback={<>...</>}>
            <NotFound />
          </React.Suspense>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
