import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { supabase } from "../lib/supBaseClient";

type FormState = {
  name: string;
  assigned: string;
  due_date: string;
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
        tittle: form.name,
        assigned: form.assigned,
        due_date: form.due_date || null,
        status: form.status,
      },
    ]);

    if (error) {
      console.error("Error adding task:", error);
      return;
    }

    // Reset form and close modal
    setForm({
      tittle: "",
      assigned: "",
      due_date: "",
      status: "Pending",
    });
    setModal(false);
  };

  return (
    <>
      {/* Card to trigger modal */}
      <div className="card" onClick={modalToggle} style={{ cursor: "pointer" }}>
        <h3>Create Your Task</h3>
        <span className="card__icon">
          <AiOutlinePlusCircle size={40} />
        </span>
        <p>Click here to create a new task.</p>
      </div>

      {/* Modal */}
      {modal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3>Create Task</h3>
              <span onClick={modalToggle} style={{ cursor: "pointer" }}>
                <ImCancelCircle size={30} />
              </span>
            </div>

            <form className="create-task-form" onSubmit={handleSubmit}>
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
                name="assigned_to"
                placeholder="Assigned to"
                value={form.assigned_to}
                onChange={handleChange}
              />

              <input
                type="date"
                name="due_date"
                value={form.due_date}
                onChange={handleChange}
              />

              <select name="status" value={form.status} onChange={handleChange}>
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>

              <button type="submit">Create Task</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
