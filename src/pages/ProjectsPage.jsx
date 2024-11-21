import Projects from '../components/Projects'
import InteractiveBackground from '../components/InteractiveBackground';
import { ImageTrail } from '../components/MouseImageTrail';
export default function ProjectsPage() {
  const customColors = [
    '224, 195, 159',
    '202, 144, 129',
    '#e8e4dc'
  ];
  return (
    <>
      <InteractiveBackground colors={customColors} />
      <ImageTrail />
      <Projects />
    </>
  )
}
