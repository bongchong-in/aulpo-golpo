import { Content } from '../types';
import { 
  NAVBAR_DATA, 
  PROLOGUE_DATA, 
  STORIES_DATA, 
  LIVE_WALL_DATA, 
  EPILOGUE_DATA 
} from '../data/contentData';

export function getAppContent(): Content {
  return {
    navbar: NAVBAR_DATA,
    prologue: PROLOGUE_DATA,
    chapters: STORIES_DATA,
    liveWall: LIVE_WALL_DATA,
    epilogue: EPILOGUE_DATA
  };
}
