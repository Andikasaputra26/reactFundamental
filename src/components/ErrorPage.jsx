import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    
    return (
        <div>
            Oh, ada Erro !!!
        </div>
    );
};

export default ErrorPage;