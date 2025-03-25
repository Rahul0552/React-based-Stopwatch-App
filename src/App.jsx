import React from 'react';
import './components/StopWatch.css' // Import the CSS file
import StopWatch from './components/StopWatch';

const App = () => {
    return (
      <div className="container">
          <StopWatch />
        <div className="containerglass">

            <p className='stoptext'>
                Life is like a stopwatch constantly ticking, reminding us that time never stops. <br />
                Every second presents an opportunity to learn, grow, and take action. <br />
                Just like in a race, it's not about how fast you start but how well you pace yourself. <br />
                Procrastination wastes precious moments, while focus and consistency help us reach our goals. <br />
                The key is to pause, reflect, and reset when needed, <br /> but never stop moving forward. <br />
                Whether it's a small step or a giant leap, every moment matters. <br />Use your time wisely because once it's gone, you can't restart the clock! ⏱️
            </p>
            <h1>⏳ The Stopwatch of Life: Every Second Counts! ⏳</h1>
            {/* <ul>
                <li> "Time is like a stopwatch—you can pause to reflect, but you can't rewind. Make every second count!" ⏳✨</li>
                <li> "Every tick of the clock is a chance to begin again. Reset, refocus, and keep moving forward!" 🔄💡</li>
                <li> "Success isn't about speed; it's about consistency. Even a slow-moving clock reaches its destination!" 🕰️🔥</li>
                <li> "Don't let time slip away unnoticed. Chase your dreams before the stopwatch runs out!" 🚀⏱️</li>
                <li> "You can't control time, but you can control how you use it. Spend it wisely, live it fully!" 💖⌛</li>
            </ul> */}
            </div>
        </div>
    );
}

export default App;