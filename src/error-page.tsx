import { useRouteError } from "react-router-dom";

interface ErrorResponse {
  status: number;
  statusText: string;
  message: string;
  internal: boolean;
  data: string;
  error: Error;
}

export default function ErrorPage() {
  const error = useRouteError() as ErrorResponse;

  if (!error) {
    return (
      <div className="flex flex-col gap-10 justify-center items-center h-screen w-screen">
        <h1 className="font-bold text-4xl">Oops!</h1>
        <p className="text-gray-500 text-xl">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-xl">Unknown error occurred.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 justify-center items-center h-screen w-screen">
      <h1 className="font-bold text-4xl">Oops!</h1>
      <p className="text-gray-500 text-xl">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-xl">{error.statusText || error.message}</p>
    </div>
  );
}
