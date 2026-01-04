import { useSearchParams, useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="h-screen w-screen bg-slate-900 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        
        {/* Cabeçalho com botão de voltar */}
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-slate-100 hover:text-slate-400 transition-colors"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes da Tarefa
          </h1>
        </div>

        {/* Cartão de Detalhes (Estilo igual ao Tasks.jsx) */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl text-slate-700 font-bold mb-2">
            {title}
          </h2>
          <p className="text-slate-600 leading-relaxed">
            {description}
          </p>
        </div>

      </div>
    </div>
  );
}

export default TaskPage;