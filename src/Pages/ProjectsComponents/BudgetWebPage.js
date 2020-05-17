import React from 'react';

import TextBlocks from './SupportComponents/TextBlocks.js'
import TitleCard from './SupportComponents/TitleCard.js'
import TitleLeftbar from './SupportComponents/TitleLeftbar.js'
import TitleRightbar from './SupportComponents/TitleRightbar.js'
import SummaryBlock from './SupportComponents/SummaryBlock.js'
import FeatureBlock from './SupportComponents/FeatureBlock.js'
import ComponentTree from './SupportComponents/ComponentTree.js'

import budgetPyAnimation1 from '../../Resources/ProjectAnimations/budgetPyAnimation1.gif'

function BudgetWebPage(props) {
    return (
        <div className={'project-desc-wrapper'}>
            <TitleCard>
                <TitleLeftbar title={'Budget.web'}
                              subtitle={'Personal Finance App'}
                              listHash={{
                                  'Javascript - Frontend':[
                                      'React.js',
                                      'Chart.js',
                                      'Redux',
                                      'React Sidebar',
                                      'Semantic-UI'
                                  ],
                                  'Python - Backend':[
                                      'Flask',
                                      'Numpy',
                                      'Pandas',
                                      'Anaconda',
                                      'Xlrd'
                                  ]
                              }}
                              github={{
                                  'frontend':'https://github.com/griftheorange/budget_web_py_frontend',
                                  'backend':'https://github.com/griftheorange/budget_web_py_backend'
                              }}/>
                <TitleRightbar gif={budgetPyAnimation1}/>
            </TitleCard>
            <SummaryBlock/>
        </div>
    );
}

export default BudgetWebPage;