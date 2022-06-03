import ReviewComponent from "./components/ReviewComponent";

function App() {



  return (
    <main>
      <h1 
      className="text-5xl text-center underline
       decoration-red-600 underline-offset-4 mb-10 mt-5">
        Le Reviews
      </h1>

      <div>
        <ReviewComponent />
      </div>
    </main>
  );
}

export default App;
