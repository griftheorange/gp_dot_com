import React from 'react';

import TextBlocksEnum from './SupportComponents/TextBlocksEnum.js'
import TitleCard from './SupportComponents/TitleCard.js'
import TitleLeftbar from './SupportComponents/TitleLeftbar.js'
import TitleRightbar from './SupportComponents/TitleRightbar.js'
import SummaryBlock from './SupportComponents/SummaryBlock.js'
import FeatureBlock from './SupportComponents/FeatureBlock.js'
import ComponentTree from './SupportComponents/ComponentTree.js'

import topoGlobeAnimation1 from '../../Resources/ProjectAnimations/topoGlobeAnimation1.gif'
import topoGlobeAnimation2 from '../../Resources/ProjectAnimations/topoGlobeAnimation2.gif'
import topoGlobeAnimation3 from '../../Resources/ProjectAnimations/topoGlobeAnimation3.gif'
import topoGlobeComponentTree from '../../Resources/ProjectImages/topoGlobeComponentTree.png'

function TopoGlobePage(props) {
    return (
        <div className={'project-desc-wrapper'}>
            <TitleCard>
                <TitleLeftbar title={'TopoGlobe'}
                              subtitle={'Geographic Plotting in React'}
                              listHash={{
                                  'Javascript - Frontend':[
                                      'React.js',
                                      'D3,js',
                                      'D3.geo-projection',
                                      'Topojson',
                                      'Topojson-Client'
                                  ]
                              }}
                              github={{
                                  'frontend':'https://github.com/griftheorange/topojson-test'
                              }}
                              blog={'https://medium.com/better-programming/topojson-geojson-and-projections-developing-interactive-map-visuals-for-web-apps-79e2d50abb19?source=friends_link&sk=1efcd7cd0a58d2bc38196ac02dc98ef6'}/>
                <TitleRightbar gif={topoGlobeAnimation1}/>
            </TitleCard>
            <SummaryBlock summary={TextBlocksEnum.topoGlobe}
                          setup={{
                              'frontend':{
                                  'steps':[
                                      'Uses Node Package Manager',
                                      'Clone the github repo to a local directory',
                                      'Open terminal and cd into the directory',
                                      'Run "npm install" to install dependencies',
                                      'Run "npm start" to boot app on localhost',
                                      'Optionally, run "npm build" for minified build files, then run serve -s build to boot up'
                                  ]
                              }
                          }}/>
            <FeatureBlock features={{
                              'Globe Rotation Control': {
                                'details':[
                                    'Globe rotation values can be set on 3 axes',
                                    'Auto rotation can be toggled on/off',
                                    'Rotation speeds adjustable'
                                ],
                                'animation':topoGlobeAnimation2
                              },
                              'Interactive Map Features': {
                                  'details':[
                                      'Map features can be made responsive (clickable, hover events, etc.)',
                                      'Features are only limited by what you can draw',
                                      'Any geojson shapes can be drawn on the map (e.g. the red circles) and can be made to respond to events the same way'
                                  ],
                                  'animation':topoGlobeAnimation3
                              }
                          }}/>
            <ComponentTree images={{
                'frontend - React Components':topoGlobeComponentTree
            }}/>
        </div>
    );
}

export default TopoGlobePage;