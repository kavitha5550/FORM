import { useEffect, useState } from "react";

function UseEffectDemo() {
  const students = [
    { id: 1, name: "Arun", course: "PHP" },
    { id: 2, name: "Banu", course: "MERN STACK" },
  ];

  function getAllStudents() {
    return students;
  }

  const [studentlist, setStudentList] = useState([]);

  const [studentdata, setStudentData] = useState({
    studentname: "",
    course: "",
  });

  const [data1, setData1] = useState({
    sname: "",
    course: "",
  });

  useEffect(() => {
    setStudentList(getAllStudents());
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    var newid = students.length + 1;
    students.push({
      id: newid,
      name: studentdata.studentname,
      course: studentdata.course,
    });
    setStudentList(students);
    resetData();
  };

  const resetData = () => {
    setStudentData({
      studentname: "",
      course: "",
    });
  };
  return (
    <div>
      <center>
        <h2>Student List</h2>
        <hr />

        <form method="POST" onSubmit={handleSubmit}>
          <input
            type="text"
            className="border"
            name="studentname"
            value={studentdata.studentname}
            onChange={(e) =>
              setStudentData({ ...studentdata, studentname: e.target.value })
            }
            placeholder="Student name"
          />
          <br />
          <br />
          <input
            type="text"
            className="border"
            name="course"
            value={studentdata.course}
            onChange={(e) =>
              setStudentData({ ...studentdata, course: e.target.value })
            }
            placeholder="Course"
          />
          <br />
          <br />
          <input type="submit" className="border" value="Add Student" />
          <input
            type="button"
            className="border"
            value="Reset Data"
            onClick={resetData}
          />
        </form>
        {studentlist &&
          studentlist.map((student) => {
            return (
              <p key={student.id}>
                {student.id} - {student.name} - {student.course}
              </p>
            );
          })}
      </center>
    </div>
  );
}

export default UseEffectDemo;
