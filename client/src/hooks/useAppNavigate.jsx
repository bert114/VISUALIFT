import { useNavigate } from "react-router-dom";

export function useAppNavigate() {
  const navigate = useNavigate();

  return {
    goUpload: () => navigate("/upload"),
    goPromptReview: () => navigate("/promptreview"),
    goHome: () => navigate("/"),
    goResult: () => navigate("/result"),
  };
}
