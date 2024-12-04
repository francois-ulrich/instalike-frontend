import { PrimeReactProvider } from "primereact/api";
import "./App.css";
import { AuthenticationContextProvider } from "./features/auth/store/AuthenticationContextProvider";
import { AppView } from "./shared/components/AppView";
import { ToastContextProvider } from "./features/toast/store/ToastContextProvider";

function App() {
  return (
    <AuthenticationContextProvider>
      <PrimeReactProvider>
        <ToastContextProvider>
          <AppView></AppView>
        </ToastContextProvider>
      </PrimeReactProvider>
    </AuthenticationContextProvider>
  );
}

export default App;
