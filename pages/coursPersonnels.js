import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "firebaseConfig";
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";

const fetchData = async () => {
  const querySnapshot = await getDocs(collection(db, "cours"));
  const data = [];

  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      title: doc.data().title,
      description: doc.data().description,
    });
  });

  return data;
};

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    fetchData().then((data) => setCourses(data));
  }, []);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  return (
    <>
      <Navbar />
      <div className="h-full pt-48 pb-48 flex w-full flex-1 shrink-0 flex-col items-center justify-center px-8 text-center">
        <div className="column w-1/2 items-center gap-8 rounded-2xl bg-white py-8 px-4 shadow-md pt-8 sm:min-w-[60rem] sm:px-10">
          <p className=" text-4xl text-center font-black sm:px-5 sm:text-center sm:text-2xl">
            Voici vos cours disponibles :
          </p>
          <p className="pb-10 sm:pb-5 text-xl text-center font-thin sm:px-5 sm:text-center sm:text-sm">
            Cliquez sur un cours pour plus de détails{" "}
          </p>
          <div class="w-full flex items-center justify-between py-5 z-50">
            <hr class="w-full bg-black h-0.5" />
            <img
              src={"/sport.svg"}
              alt="sport"
              width={90}
              height={90}
              className="p-3 mx-auto rounded-lg"
            />
            <hr class="w-full bg-black h-0.5" />
          </div>
          {!selectedCourse && (
            <ol className="grid grid-cols-2 gap-4 sm:grid sm:grid-cols-1 sm:gap-4">
              {courses.map((course) => (
                <>
                  <li
                    key={course.id}
                    onClick={() => handleCourseClick(course)}
                    className="p-8 h-10 w-full sm:w-1/2 mx-auto rounded shadow-xl border text-xl hover:bg-gray-200 font-bold flex items-center justify-center cursor-pointer"
                  >
                    <h2>{course.title}</h2>
                  </li>
                </>
              ))}
            </ol>
          )}
          {selectedCourse && (
            <div>
              <h2>{selectedCourse.title}</h2>
              <p>{selectedCourse.description}</p>
              <button onClick={() => setSelectedCourse(null)}>Back</button>
            </div>
          )}
          <div className="text-center pt-10">
            <button
              type="button"
              className="rounded-sm text-xl border-2 border-black bg-white px-8 py-2 font-bold text-black hover:bg-black hover:text-white focus:bg-orange-400 focus:text-white"
            >
              <a href="profilePage">Retour au profil</a>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseList;
