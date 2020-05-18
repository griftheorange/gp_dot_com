import React from 'react';

import TextBlocks from './SupportComponents/TextBlocks.js'
import TitleCard from './SupportComponents/TitleCard.js'
import TitleLeftbar from './SupportComponents/TitleLeftbar.js'
import TitleRightbar from './SupportComponents/TitleRightbar.js'
import SummaryBlock from './SupportComponents/SummaryBlock.js'
import FeatureBlock from './SupportComponents/FeatureBlock.js'
import ComponentTree from './SupportComponents/ComponentTree.js'
import componentTreeImg from '../../Resources/ProjectImages/smComponentTree.png'

import topoGlobeAnimaiton1 from '../../Resources/ProjectAnimations/topoGlobeAnimation1.gif'

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
                <TitleRightbar gif={topoGlobeAnimaiton1}/>
            </TitleCard>
            <SummaryBlock summary={TextBlocks.topoGlobe}
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
        </div>
    );
}

export default TopoGlobePage;