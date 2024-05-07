import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
//Create the HOC for protected Routes
const ReqAuth = ({ children }) => {
	const isAuth = useSelector((state) => state.AuthReducer.isAuth);

	if (!isAuth) {
		return <Navigate to="/login" />;
	}

	return children;
};

export default ReqAuth;
