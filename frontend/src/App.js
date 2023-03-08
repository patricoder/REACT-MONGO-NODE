import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  AddWorkout,
  AvailableExercises,
  CreatePlan,
  MyPlans,
  MyPlan,
  Login,
  Register,
} from "./pages";
import Welcome from "./pages/Welcome/Welcome";
import GlobalStyle from "./theme/GlobalStyles";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" index element={<Welcome />} />
        {/* <Route path="/" element={<Home />}>
          <Route path="/show-excersises" element={<AvailableExercises />} />
          <Route path="/create-plan" element={<CreatePlan />} />
          <Route path="/my-plans" element={<MyPlans />} />
          <Route path="/my-plans/:id" element={<MyPlan />} />
          <Route path="/add-workouts" element={<AddWorkout />} />
        </Route> */}

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
