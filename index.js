import { getTwitterFollower } from './lib/scraper';

async function run() {
  const twCount = await getTwitterFollower('Twitter');
  console.log(`You have ${twCount} Followers`);
}

run();
