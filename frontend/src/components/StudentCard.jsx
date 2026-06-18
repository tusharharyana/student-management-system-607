// function StudentCard(props) {
//   const { name, course } = props;
//   return (
//     <div style={{ border: "1px solid black", padding: "10px", width: "200px" }}>
//       <h2>Student Card</h2>
//       <p>Display student details in a card</p>
//       <p>{name}</p>
//       <p>{course}</p>
//     </div>
//   );
// }

// function StudentCard(props) {
//   return (
//     <div style={{ border: "1px solid black", padding: "10px", width: "200px" }}>
//       <h2>Student Card</h2>
//       <p>Display student details in a card</p>
//       <p>{props.name}</p>
//       <p>{props.course}</p>
//     </div>
//   );
// }

function StudentCard({ name, course }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", width: "200px" }}>
      <h2>Student Card</h2>
      <p>Display student details in a card</p>
      <p>{name}</p>
      <p>{course}</p>
    </div>
  );
}
export default StudentCard;
