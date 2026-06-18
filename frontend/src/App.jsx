import StudentCard from "./components/StudentCard";
import StudentForm from "./components/StudentForm";

function App() {
  // const [students, setStudents] = useState([]);
  // const [count, setCount] = useState(0);
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // const getStudents = async () => {
  //   const response = await fetch("http://localhost:8080/students");

  //   const data = await response.json();

  //   setStudents(data);
  // };

  // const getBCAStudents = async () => {
  //   const response = await fetch("http://localhost:8080/students/bca");
  //   const data = await response.json();

  //   setStudents(data);
  // };

  // const fetchTotalStudentCount = async () => {
  //   const response = await fetch("http://localhost:8080/students/count");
  //   const data = await response.json();
  //   setCount(data);
  // };

  // const login = async () => {
  //   const response = await fetch("http://localhost:8080/auth/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       username,
  //       password,
  //     }),
  //   });
  //   alert("Login Successful");
  // };

  // return (
  //   <div style={{ padding: "40px" }}>
  //     <button onClick={getStudents}>Get Students</button>

  //     <button onClick={getBCAStudents}>Show BCA students</button>

  //     <ul>
  //       {students.map((student) => (
  //         <li key={student.id}>
  //           {student.name} - {student.course}
  //         </li>
  //       ))}
  //     </ul>

  //     <button onClick={fetchTotalStudentCount}>Get Total Student Count</button>

  //     <p>Total students: {count}</p>

  //     <input
  //       placeholder="Enter username"
  //       onChange={(e) => setUsername(e.target.value)}
  //     />
  //     <input
  //       placeholder="Enter password"
  //       onChange={(e) => setPassword(e.target.value)}
  //     />

  //     <button onClick={login}>Login</button>
  //   </div>
  // );

  return (
    <div>
      <StudentCard name="Diya and partner" course="FS" />
      <StudentForm />
    </div>
  );
}

export default App;
