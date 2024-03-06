import './AboutMe.css';
import { AboutMeContent } from './AboutMeContent';

export function AboutMe() {
  return (
    <div id="aboutme">
      <h1>About Me</h1>
      {AboutMeContent.paragraph1}
      {AboutMeContent.paragraph2}
      {AboutMeContent.image}
    </div>
  );
}