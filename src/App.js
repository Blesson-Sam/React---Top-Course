import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { filterData, apiUrl } from "./data";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        setCourses(result.data);
        setLoading(false);
      } catch (error) {
        toast.error("Error fetching data");
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Navbar />
      </div>
      <div className="bg-bgDark2">
        <div>
          <Filter filterData={filterData} category={category} setCategory={setCategory}/>
        </div>
        <div
          className="w-11/12 max-w-[1200px] 
          mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
            {!loading ? <Cards courses={courses} category={category}/> : <Spinner />}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
