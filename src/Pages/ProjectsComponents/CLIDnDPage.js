import React from 'react';

import TitleCard from './SupportComponents/TitleCard.js'
import TitleLeftbar from './SupportComponents/TitleLeftbar.js'
import TitleRightbar from './SupportComponents/TitleRightbar.js'
import budgetPyAnimation1 from '../../Resources/ProjectAnimations/budgetPyAnimation1.gif'

function CLIDnDPage(props) {
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
        </div>
    );
}

export default CLIDnDPage;