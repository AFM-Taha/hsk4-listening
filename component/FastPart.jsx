export default function FastPart({ list }) {
  const { no, context, question, ans, audio } = list;

  return (
    <div key={no} className="mb-8">
      <div>
        <h2 className="text-xl mb-4">Question No: {"0" + no}</h2>
      </div>

      <div className="max-w-[300px] md:max-w-[500px] mb-4">
        <audio controls className="w-full">
          <source src={audio} />
        </audio>
      </div>

      <div className="mb-8 p-4 border rounded-lg">
        <div className="mb-4">
          <h2 className="text-sm md:text-xl mb-2">Context:</h2>
          <h3 className="text-red-400 text-xs mb-1 md:text-lg">CN: {context?.cn}</h3>
          <h3 className="text-green-300 text-xs mb-1 md:text-lg">PY: {context?.py}</h3>
          <h3 className="text-yellow-300 text-xs mb-1 md:text-lg">EN: {context?.en}</h3>
        </div>

        <div className="mb-4">
          <h2 className="text-sm md:text-xl mb-2">Question:</h2>
          <h3 className="text-xs mb-1 md:text-lg">
            {question?.cn} ({question?.py})
          </h3>
          <h3 className="text-xs mb-1 md:text-lg">{question?.en}</h3>
        </div>

        <div>
          <h2 className="text-sm md:text-xl mb-2 flex items-center gap-2">
            Answer:
            {ans?.isCorrect ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </h2>
          <h3 className="text-xs mb-1 md:text-lg">
            {ans?.cn} ({ans?.py}) / {ans?.en}
          </h3>
        </div>
      </div>
    </div>
  );
}
