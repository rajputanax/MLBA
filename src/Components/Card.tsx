import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { supabase } from "../lib/supBaseClient";

type FormState = {
  name: string;
  assigned: string;
  due_date:  string;
  status: string;
};

const Card = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    assigned: "",
    due_date: "",
    status: "Pending",
  });

  const [modal, setModal] = useState<boolean>(false);
   const [loading , setLoading ] = useState<boolean>(false);

  const modalToggle = () => setModal(!modal);

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { error } = await supabase.from("task").insert([
      {
        tittle: form.name, // Ensure this matches your DB column name
        assigned: form.assigned,
        due_date: form.due_date || null,
        status: form.status,
        completed: form.status === "Completed"
      },
    ]);
setLoading(true);
    if (error) {
      console.error("Error adding task:", error);
      return;
    }

    // Reset form using correct keys
    setForm({
      name: "",
      assigned: "",
      due_date: "",
      status: "Pending",
    });
    setModal(false);
    setLoading(false);
  };

  return (
    <>
     <div className={` ${loading ? "loading-overlay" : "wrapper--card"}`}>
      
      
      
      <div className="card" onClick={modalToggle} style={{ cursor: "pointer" }}>
        <h3>Create Your <span>Task</span></h3>
        <span className="card__icon">
          <AiOutlinePlusCircle size={40} />
        </span>
        <p>Click here to create a new task.</p>
      </div>

      {modal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2>Create Task</h2>
              <span onClick={modalToggle} style={{ background: "", border: "none", cursor: "pointer" }}>
                <ImCancelCircle size={30} />
              </span>
            </div>

            <form className="create-task-form auth-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Task name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="assigned" // Changed from assigned_to to match state
                placeholder="Assigned to"
                value={form.assigned}
                onChange={handleChange}
              />

              <input
                type="date"
                name="due_date"
                value={form.due_date}
                onChange={handleChange}
              />

              <select name="status" value={form.status} onChange={handleChange}>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>

              <button type="submit">Create Task</button>
            </form>
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default Card;
