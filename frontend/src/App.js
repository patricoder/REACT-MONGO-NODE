import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, AddWorkout } from "./pages";
import GlobalStyle from "./theme/GlobalStyles";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/show-excersises" element={<>DOSTĘPNE ĆWICZENIA</>} />
          <Route path="/create-plan" element={<>STWÓRZ PLAN TRENINGOWY</>} />
          <Route path="/my-plans" element={<>MOJE PLANY TRENINGOWE</>} />
          <Route path="/add-workouts" element={<AddWorkout />} />
        </Route>

        <Route path="/login" element={<> Login </>} />
        <Route path="/register" element={<> Register </>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
