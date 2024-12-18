import React from "react";
import { Provider, useSelector } from "react-redux";
import store, { RootState } from "./redux/slices";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppRoutes from "./routes";
import { darkTheme, lightTheme } from "./constants/theme";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

const ThemedApp: React.FC = () => {
  const isDarkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={isDarkMode ? "dark" : "light"}
        closeButton={false}
      />

      <AppRoutes />
    </ThemeProvider>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemedApp />
        <ReactQueryDevtools
          initialIsOpen={false}
          position="left"
          buttonPosition="bottom-left"
        />
      </QueryClientProvider>
    </Provider>
  );
}
