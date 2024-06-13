import { BrowserRouter, Navigate, PrivateRoute, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import HomePage from "./pages/Home";
import QnA from "./pages/QnA";
import Profiles from "./pages/Profiles";
import ProfileUpdate from "./pages/ProfileUpdate";
import CareerCreate from "./pages/CareerCreate";
import EducationsCreate from "./pages/EducationsCreate";
import SitesCreate from "./pages/SitesCreate";
import ProfileSkills from "./pages/ProfileSkills";
import SearchResult from "./pages/SearchResult";
import CreateQna from "./pages/CreateQna";
import QnaDetail from "./pages/QnaDetail";
import TaggedSearch from "./pages/TaggedSearch";
import { useSelector } from "react-redux";

function Router() {
    const isLoggedIn = useSelector((state) => state.loginStatus.status);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Main />} />
                <Route path="/home" element={isLoggedIn ? <HomePage /> : <Navigate to="/" />} />
                <Route path="/qnas" element={<QnA />} />
                <Route path="/qnas/detail" element={<QnaDetail />} />
                <Route path="/qnas/tagged/:tag" element={<TaggedSearch />} />
                <Route path="/profiles" element={isLoggedIn ? <Profiles /> : <Navigate to="/" />} />
                <Route path="/profiles/update" element={<ProfileUpdate />} />
                <Route path="/profiles/careers/create" element={<CareerCreate />} />
                <Route path="/profiles/educations/create" element={<EducationsCreate />} />
                <Route path="/profiles/sites/create" element={<SitesCreate />} />
                <Route path="/profiles/skills" element={<ProfileSkills />} />
                <Route path="/search" element={<SearchResult />} />
                <Route path="/qna/create" element={<CreateQna />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
