import React from 'react';

import TextBlocks from './SupportComponents/TextBlocks.js'
import TitleCard from './SupportComponents/TitleCard.js'
import TitleLeftbar from './SupportComponents/TitleLeftbar.js'
import TitleRightbar from './SupportComponents/TitleRightbar.js'
import SummaryBlock from './SupportComponents/SummaryBlock.js'
import FeatureBlock from './SupportComponents/FeatureBlock.js'
import ComponentTree from './SupportComponents/ComponentTree.js'

import CLIDnDAnimation1 from '../../Resources/ProjectAnimations/CLIDnDAnimation1.gif'
import CLIDnDAnimation2 from '../../Resources/ProjectAnimations/CLIDnDAnimation2.gif'
import CLIDnDAnimation3 from '../../Resources/ProjectAnimations/CLIDnDAnimation3.gif'
import CLIDnDAnimation4 from '../../Resources/ProjectAnimations/CLIDnDAnimation4.gif'
import CLIDnDAnimation5 from '../../Resources/ProjectAnimations/CLIDnDAnimation5.gif'

function CLIDnDPage(props) {
    return (
        <div className={'project-desc-wrapper'}>
            <TitleCard>
                <TitleLeftbar title={'CLI DnD'}
                              subtitle={'DnD Organizer, Monster Database CLI'}
                              listHash={{
                                  'Ruby':[
                                      'Sinatra',
                                      'Active Record',
                                      'SQLite3',
                                      'Rest Client',
                                      'Launchy',
                                      'Rake'
                                  ]
                              }}
                              github={{
                                  'repo':'https://github.com/griftheorange/module-one-final-project-guidelines-dumbo-web-102819'
                              }}
                              demo={'https://youtu.be/rx2kztJJ9mc'}/>
                <TitleRightbar gif={CLIDnDAnimation1}/>
            </TitleCard>
            <SummaryBlock summary={TextBlocks.CLIDnD}
                            setup={{
                                'frontend':{
                                    'steps':[
                                        'Uses Ruby Bundler',
                                        'Clone the repo to a local directory',
                                        'Cd into the directory',
                                        'Run "bundle install"',
                                        'Run "rake db:migrate"',
                                        'Run "rake monsterSeed", this seeds the monsters from the DnD API, may take a minute',
                                        'Run "rake run"',
                                        "You're all set!"
                                    ]
                                }
                            }}/>
            <FeatureBlock features={{
                              'World Building': {
                                'details':[
                                    'Users can create multiple stories for their session',
                                    'Each story can contain multiple worlds',
                                    'Each world can be filled with locations',
                                    "With these features, DMs can worldbuild and organize prior to sessions"
                                ],
                                'animation':CLIDnDAnimation2
                              },
                              'Monster Catalog':{
                                  'details':[
                                    'Users can list all monsters and all monster types in a catalog',
                                    'For more compact lists, users can search for monsters by type, challenge rating or name',
                                    'Once a monster of interest is found, its details can be listed in a print-out or online'
                                  ],
                                  'animation':CLIDnDAnimation3
                              },
                              'Add Monsters to a Location':{
                                  'details':[
                                      `Users can add and remove monsters by name to a location's "pool"`,
                                      'Monsters at a location can be printed in a list',
                                      'Also, given a monsters name, you can list locations in this story where that monster appears'
                                  ],
                                  'animation':CLIDnDAnimation4
                              },
                              'DM Utility Features':{
                                  'details':[
                                      `At a location, an indecisive (or evil) Dungeon Master can randomly draw a monster from the location's pool`,
                                      `Once drawn, DMs can view the monster's details online or in print-out. Alternatively, they can pass`,
                                      'The app also provides a simple d20 Dice Roller'
                                  ],
                                  'animation':CLIDnDAnimation5
                              }
                          }}/>
        </div>
    );
}

export default CLIDnDPage;