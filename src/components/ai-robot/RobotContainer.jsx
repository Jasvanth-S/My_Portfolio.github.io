import React from 'react';
import { RobotProvider } from './RobotBrain';
import RobotCharacter from './RobotCharacter';
import RobotTooltip from './RobotTooltip';
import RobotPanel from './RobotPanel';

const RobotContainer = () => {
  return (
    <RobotProvider>
      <div className="fixed bottom-4 right-6 sm:bottom-6 sm:right-8 z-[9999] flex flex-row items-end pointer-events-none">
        {/* Absolute Wrapper for positioning everything relative to bottom-right */}
        <div className="relative w-24 h-32 sm:w-28 sm:h-36 flex justify-center pointer-events-auto">
           {/* The chat panel (Gemini integration, expands upwards and leftwards) */}
           <RobotPanel />

           {/* The full-body character itself (clickable button) */}
           <RobotCharacter />
           
           {/* The tooltip positioned to the left of the robot */}
           <RobotTooltip />
        </div>
      </div>
    </RobotProvider>
  );
};

export default RobotContainer;
