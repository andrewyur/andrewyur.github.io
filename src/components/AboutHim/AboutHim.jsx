import './AboutHim.css';
import { AboutHimContent } from './AboutHimContent';

export function AboutHim() {
  return (
    <div id="aboutme">
      <h1>About Him</h1>
      {AboutHimContent.paragraph1}
      {AboutHimContent.paragraph2}
      {AboutHimContent.image}
    </div>
  );
}