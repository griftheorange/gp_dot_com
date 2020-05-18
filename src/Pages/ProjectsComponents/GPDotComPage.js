import React from 'react';

import TextBlocks from './SupportComponents/TextBlocks.js'
import TitleCard from './SupportComponents/TitleCard.js'
import TitleLeftbar from './SupportComponents/TitleLeftbar.js'
import TitleRightbar from './SupportComponents/TitleRightbar.js'
import SummaryBlock from './SupportComponents/SummaryBlock.js'
import FeatureBlock from './SupportComponents/FeatureBlock.js'
import ComponentTree from './SupportComponents/ComponentTree.js'

import gpComAnimation1 from '../../Resources/ProjectAnimations/gpComAnimation1.gif'
import gpComAnimation2 from '../../Resources/ProjectAnimations/gpComAnimation2.gif'
import gpComAnimation3 from '../../Resources/ProjectAnimations/gpComAnimation3.gif'
import gpComComponentTree from '../../Resources/ProjectImages/gpComComponentTree.png'

function GPDotComPage(props) {
    return (
        <div className={'project-desc-wrapper'}>
            <TitleCard>
                <TitleLeftbar title={'GP.com'}
                              subtitle={'Personal Landing Page'}
                              listHash={{
                                  'Javascript - Frontend':[
                                      'React.js',
                                      'React-Router',
                                      'Semantic-UI',
                                      'Deployed with Shared Hosting Services'
                                  ]
                              }}
                              github={{
                                  'frontend':'https://github.com/griftheorange/gp_dot_com'
                              }}/>
                <TitleRightbar gif={gpComAnimation1}/>
            </TitleCard>
            <SummaryBlock summary={TextBlocks.gpCom}
                            setup={{
                                'frontend':{
                                    'steps':[
                                        'Uses Node Package Manager',
                                        'Pull the github repo to a local directory',
                                        'Open terminal and cd into the directory',
                                        'Run "npm install" to install dependencies',
                                        'Run "npm start" to boot app on localhost',
                                        'Optionally, run "npm build" for minified build files, then run serve -s build to boot up'
                                    ]
                                }
                            }}/>
            <FeatureBlock features={{
                              'Personal "Business Card"': {
                                'details':[
                                    'My business card with contact information, links to my resume, blog, and social media',
                                    'Skillset overview and a brief personal statement'
                                ],
                                'animation':gpComAnimation2
                              },
                              'Project Portfolio':{
                                  'details':[
                                      'An up-to-date collection of my project work',
                                      'Sorted left-to-right, top-down with project most representative of my work coming first',
                                      'Starred projects are my personal favorites',
                                      'As I complete more projects, more cards will be added. Stay tuned!'
                                  ],
                                  'animation':gpComAnimation3
                              }
                          }}/>
            <ComponentTree images={{
                    'frontend - React Components':gpComComponentTree
            }}/>
        </div>
    );
}

export default GPDotComPage;