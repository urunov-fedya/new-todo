import { lazy } from "react";

export const NotFoundPage = lazy(() => import("@/pages/404"));
export const HomePage = lazy(() => import("@/pages/Home"));
export const TodoShowPage = lazy(() => import("@/pages/Todo/TodoShowPage"));
