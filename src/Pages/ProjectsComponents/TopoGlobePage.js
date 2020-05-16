import React from 'react';

function TopoGlobePage(props) {
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

export default TopoGlobePage;