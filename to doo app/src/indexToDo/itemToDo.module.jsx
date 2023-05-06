export function Item ({todo}){
  console.log(todo);
    return(<li className="d-sm-flex align-items-center mb-3">
    <input type="checkbox" className="check_input" />
    <span className="ms-2 todoText">{todo.nameToDo}</span>
    <div className="ms-auto">
      <button className="btn btn-success btnEdit">Edit</button>
      <button className="btn btn-danger ms-2 btnDelete">Delete</button>
    </div>
  </li>)
}