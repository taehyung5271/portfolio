import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    
    return (
        <div>
            <h1>여기는 홈입니다.</h1>
            <button onClick={() => navigate('/project')}>
                프로젝트 상세 보기
            </button>
        </div>
    )
}

export default Home;