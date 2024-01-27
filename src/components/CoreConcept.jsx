export function CoreConcept(props){
    return (
      <div>
        <img src={props.image}/>
        <h2> {props.title} </h2>
        <p> {props.description} </p>
      </div>
    )
  }