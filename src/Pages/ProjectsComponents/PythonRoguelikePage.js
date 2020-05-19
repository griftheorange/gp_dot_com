import React from 'react';

import TextBlocks from './SupportComponents/TextBlocks.js'
import TitleCard from './SupportComponents/TitleCard.js'
import TitleLeftbar from './SupportComponents/TitleLeftbar.js'
import TitleRightbar from './SupportComponents/TitleRightbar.js'
import SummaryBlock from './SupportComponents/SummaryBlock.js'
import FeatureBlock from './SupportComponents/FeatureBlock.js'
import ComponentTree from './SupportComponents/ComponentTree.js'

import pythonRogueAnimation1 from '../../Resources/ProjectAnimations/pythonRogueAnimation1.gif'
import pythonRogueAnimation2 from '../../Resources/ProjectAnimations/pythonRogueAnimation2.gif'
import pythonRogueAnimation3 from '../../Resources/ProjectAnimations/pythonRogueAnimation3.gif'
import pythonRogueAnimation4 from '../../Resources/ProjectAnimations/pythonRogueAnimation4.gif'


function PythonRoguelikePage(props) {
    return (
        <div className={'project-desc-wrapper'}>
            <TitleCard>
                <TitleLeftbar title={'Python Roguelike'}
                              subtitle={'Procedurally Generated Dungeon Crawler'}
                              listHash={{
                                  'Python':[
                                      'Anaconda',
                                      'LibTcod Library'
                                  ]
                              }}
                              github={{
                                  'repo':'https://github.com/griftheorange/python_roguelike'
                              }}/>
                <TitleRightbar gif={pythonRogueAnimation1}/>
            </TitleCard>
            <SummaryBlock summary={TextBlocks.pythonRogue}
                          setup={{
                            'App':{
                                'steps':[
                                    'Uses Python (Preferably with Anaconda)',
                                    'Clone the github repo to a local directory',
                                    'Open terminal and cd into the directory',
                                    'If using Anaconda, run "conda env create -f environment.yml" to create a conda environment named "roguelike" by default',
                                    'After the above, run "roguelike activate" to activate the dependency environment',
                                    'If not using Anaconda, you may have to open the environment.yml file and install the dependecies listed in your environment manager of choice',
                                    'Finally, running "python engine.py" should boot up your game',
                                    'Have fun!'
                                ]
                            }
                        }}/>
            <FeatureBlock features={{
                              'Procedurally Generated Dungeons': {
                                'details':[
                                    'Dungeons are randomly carved out at the start of each new game',
                                    'Users can reload their last played game if they have exited out in the middle of a session',
                                    'Enemies, Items, Weapons and more increase in value the deeper you descend!'
                                ],
                                'animation':pythonRogueAnimation2
                              },
                              'Items, Equipment, Weapons':{
                                  'details':[
                                      'Weapons, potions and spell scrolls spawn for increased combat efficacy!',
                                      'Items are stored in a players inventory and can be dropped to clear space'
                                  ],
                                  'animation':pythonRogueAnimation3
                              },
                              'Combat and Level Ups!':{
                                  'details':[
                                      'Users encounter monsters in the dungeon that get harder the deeper you delve',
                                      'Defeating monsters in combat earns you experience, which can be used to level up and increase your stats'
                                  ],
                                  'animation':pythonRogueAnimation4
                              }
                          }}/>
        </div>
    );
}

export default PythonRoguelikePage;