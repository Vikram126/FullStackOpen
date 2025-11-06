const Total = (props) => {
   const totalExercises = props.total.reduce((sum, part)=> sum + part.exercises,0);
return (
   <p>Number of exercises {totalExercises}</p>
);

}
export default Total;