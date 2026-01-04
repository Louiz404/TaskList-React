import PropTypes from "prop-types";
import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-3 p-6 bg-white rounded-2xl shadow-lg">
      {tasks.length === 0 && (
        <p className="text-center text-slate-500 text-sm">
          Nenhuma tarefa registrada.
        </p>
      )}

      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`flex items-center w-full text-left px-4 py-3 rounded-lg transition-all border ${
              task.completed
                ? "bg-slate-50 border-slate-100 line-through text-slate-400"
                : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {task.title}
          </button>

          <button
            onClick={() => onSeeDetailsClick(task)}
            className="bg-slate-100 text-slate-600 p-3 rounded-lg hover:bg-indigo-100 hover:text-indigo-600 border border-slate-200 transition-colors"
          >
            <ChevronRightIcon size={20} />
          </button>

          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-slate-100 text-slate-600 p-3 rounded-lg hover:bg-red-100 hover:text-red-500 border border-slate-200 transition-colors"
          >
            <TrashIcon size={20} />
          </button>
        </li>
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  onTaskClick: PropTypes.func.isRequired,
  onDeleteTaskClick: PropTypes.func.isRequired,
};

export default Tasks;