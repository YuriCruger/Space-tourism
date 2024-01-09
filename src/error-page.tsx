import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div
      id="error-page"
      className="flex flex-col gap-10 justify-center items-center h-screen w-screen"
    >
      <h1 className="font-bold text-4xl">Oops!</h1>
      <p className="text-gray-500 text-xl">
        Sorry, an unexpected error has occurred.
      </p>
      <p>
        <i className="text-xl">{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
