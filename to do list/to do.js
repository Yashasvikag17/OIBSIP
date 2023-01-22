

window.addEventListener('load',()=>{
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');

    console.log(form);

    form.addEventListener('submit', (e) => {
       e.preventDefault();
      
       const task= input.value;
       if(task==0){
        alert("enter a task");
        return
       }
       else{
        console.log("success")
       }

       const task_e1 = document.createElement("div");
       task_e1.classList.add("task");

       const task_content_e1 = document.createElement("div");
       task_content_e1.classList.add("content");

       

       task_e1.appendChild(task_content_e1);

       const task_input_e1 = document.createElement("input");
       task_input_e1.classList.add("text");
       task_input_e1.type ="text";
       task_input_e1.value = task;
       task_input_e1.setAttribute("readonly","readonly");

       task_content_e1.appendChild(task_input_e1)

       const task_actions_e1 = document.createElement("div");
       task_actions_e1.classList.add("actions");

       const task_edit_e1 = document.createElement("button");
       task_edit_e1.classList.add("edit");
       task_edit_e1.innerHTML = "Edit";

       const task_delete_e1 = document.createElement("button");
       task_delete_e1.classList.add("delete");
       task_delete_e1.innerHTML = "Delete";

       task_actions_e1.appendChild(task_edit_e1);
       task_actions_e1.appendChild(task_delete_e1);

       task_e1.appendChild(task_actions_e1);


       list_el.appendChild(task_e1);
       
       input.value =" ";

       task_edit_e1.addEventListener('click', () =>{

         if(task_edit_e1.innerText.toLowerCase() == "edit"){
            task_input_e1.removeAttribute("readonly");
            task_input_e1.focus();
            task_edit_e1.innerText="Save";

        }
        else{
            task_input_e1.setAttribute("readonly" , "readonly");
            task_edit_e1.innerText="Edit";
        }
      
       });

       task_delete_e1.addEventListener('click', () =>{
        list_el.removeChild(task_e1);
       });
       
    });
});