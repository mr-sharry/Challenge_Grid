import './App.css'
import { Link } from 'react-router-dom';
//importing pages

export default function App() {
  return (
    <main>
      <Link to="/BinaryPractice">Binary Practice</Link>
      <Link to="/QuestionUpload">Question Upload</Link>
      <Link to="/ChallengeGrid">Challenge Grid</Link>
      <Link to="/Help">Help</Link>
    </main>
  )
}