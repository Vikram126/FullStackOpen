const Header = ({text}) => <h1>{text}</h1> ;

const Content = ({parts}) => (
    <div>
        {parts.map((part) => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
    </div>
) ;

const Part = ({name, exercises}) => <p>{name} {exercises}</p> ;

const Total =({ parts }) => {
    const allExercises = parts.reduce((acc, cur) => {
    //    console.log("whoa", acc,cur.exercises)
       return acc + cur.exercises 
    },0);
    return <p><b>Total of {allExercises} exercises</b></p>;
}

const Course = ({course}) => {
    return(
        <div>
            <Header text ={course.name} />
            <Content parts ={course.parts} />
            <Total parts={course.parts}/>
        </div>
    )

}

export default Course;