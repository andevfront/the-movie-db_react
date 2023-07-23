export const LoadingButton = ({ isLoading, handleIncrement }) => {
  return (
    <button
      className="mx-auto my-5 flex items-center gap-2 rounded-lg border border-sky-500 bg-slate-800/50 px-4 py-2 font-medium text-white transition-all duration-300 hover:bg-slate-800/80"
      onClick={handleIncrement}
    >
      {isLoading ? (
        <>
          <svg
            className="h-5 w-5 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Cargando
        </>
      ) : (
        "Cargar más"
      )}
    </button>
  );
};
