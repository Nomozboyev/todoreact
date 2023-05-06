import { Item } from "../indexToDo/itemToDo.module";
export let ToDoList = ({allToDo}) => {
  return (
    <>
      <div className="w-50 mx-auto mb-5">
        <b>
          All jobs number: <i className="count">0</i>
        </b>
      </div>
      <ul className=" all_jobs_js list-unstyled  w-50 mx-auto ">
        { allToDo.map(todo=>(<Item key={todo.id } todo={todo}/>))  }        
      </ul>
    </>
  );
};
