 import { useState, useEffect } from "react";
import Card from "../Components/Card";
import { supabase } from "../lib/supBaseClient";

const ClientDashBoards = () => {
  const [task, setTask] = useState<any[]>([]);

  useEffect(() => {
    const fetchTask = async () => {
      const { data, error } = await supabase
        .from("task")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.log("error fetching task", error);
      } else {
        setTask(data || []);
        console.log("fetched tasks", data);
      }
    };

    fetchTask();
  }, []);



  return (
    <>
      <div className="main--wrapper">
        <h4>
          WELCOME TO YOUR DASHBOARD !
        </h4>
        <section className="top--header">
          <div className="cards">
            <Card />
          </div>
        </section>

        <section className="bottom-section">
          <table>
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Assigned To</th>
                <th>Due Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {task.length === 0 && (
                <tr>
                  <td colSpan={4}>No tasks yet</td>
                </tr>
              )}

              {task.map((t) => (
                <tr key={t.id}>
                  <td>{t.name}</td>
                  <td>{t.assigned_to || "—"}</td>
                  <td>{t.due_date || "—"}</td>
                  <td>{t.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};

export default ClientDashBoards;
