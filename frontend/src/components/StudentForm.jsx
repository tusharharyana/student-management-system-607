import { useState } from "react";

function StudentForm() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const addStudent = async () => {
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTc4MTc2NDE3OH0.IZqIQQ6wSjH_hPisXzbwtgQvCPMnpTz_Lpm6MQNXi8k";
    const response = await fetch("http://localhost:8080/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        course: course,
      }),
    });

    alert("Student added successfully");
  };

  return (
    <div>
      <h1>Student Form</h1>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />

      <br />
      <br />

      <input placeholder="Course" onChange={(e) => setCourse(e.target.value)} />

      <br />
      <br />

      <button onClick={addStudent}>Add Student</button>
    </div>
  );
}

export default StudentForm;
