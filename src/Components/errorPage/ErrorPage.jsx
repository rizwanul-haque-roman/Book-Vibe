import { useNavigate, useRouteError } from "react-router-dom";
import bg from "../../assets/404.svg";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <div id="error-page">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold my-3">Oops!!!</h1>
            <p className="my-3">
              <i>{error.statusText || error.message}</i>
            </p>
            <button
              className="btn bg-[#557A6B] border-[#557A6B] hover:bg-[#3a6151] text-white"
              type="button"
              onClick={() => {
                navigate(-1);
              }}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
