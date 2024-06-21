import { BrowserRouter, Navigate, PrivateRoute, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import HomePage from "./pages/Home";
import QnA from "./pages/QnA";
import Profiles from "./pages/Profiles";
import ProfileUpdate from "./pages/ProfileUpdate";
import CareerCreate from "./pages/CareerCreate";
import CreateEducations from "./pages/CreateEducations";
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
                <Route path="/" element={<Main />} />
                {/* <Route path="/home" element={isLoggedIn ? <HomePage /> : <Navigate to="/" />} /> */}
                <Route path="/qnas" element={<QnA />} />
                <Route path="/qnas/detail/:qnaId" element={<QnaDetail />} />
                <Route path="/qnas/tagged/:tag" element={<TaggedSearch />} />
                <Route path="/profile/:memberId" element={<Profiles />} />
                <Route path="/profiles/update" element={<ProfileUpdate />} />
                <Route path="/profiles/careers/create" element={<CareerCreate />} />
                <Route path="/profiles/careers/update/:careerId" element={<CareerCreate />} />
                <Route path="/profiles/educations/create" element={<CreateEducations />} />
                <Route path="/profiles/educations/update/:educationId" element={<CreateEducations />} />
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
