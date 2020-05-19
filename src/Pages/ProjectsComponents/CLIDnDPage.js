import React from 'react';

import TextBlocks from './SupportComponents/TextBlocks.js'
import TitleCard from './SupportComponents/TitleCard.js'
import TitleLeftbar from './SupportComponents/TitleLeftbar.js'
import TitleRightbar from './SupportComponents/TitleRightbar.js'
import SummaryBlock from './SupportComponents/SummaryBlock.js'
import FeatureBlock from './SupportComponents/FeatureBlock.js'
import ComponentTree from './SupportComponents/ComponentTree.js'

import CLIDnDAnimation1 from '../../Resources/ProjectAnimations/CLIDnDAnimation1.gif'

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
        </div>
    );
}

export default CLIDnDPage;