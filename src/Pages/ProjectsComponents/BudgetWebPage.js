import React from 'react';

import TextBlocks from './SupportComponents/TextBlocks.js'
import TitleCard from './SupportComponents/TitleCard.js'
import TitleLeftbar from './SupportComponents/TitleLeftbar.js'
import TitleRightbar from './SupportComponents/TitleRightbar.js'
import SummaryBlock from './SupportComponents/SummaryBlock.js'
import FeatureBlock from './SupportComponents/FeatureBlock.js'
import ComponentTree from './SupportComponents/ComponentTree.js'

import budgetPyAnimation1 from '../../Resources/ProjectAnimations/budgetPyAnimation1.gif'
import budgetPyAnimation2 from '../../Resources/ProjectAnimations/budgetPyAnimation2.gif'
import budgetPyAnimation3 from '../../Resources/ProjectAnimations/budgetPyAnimation3.gif'
import budgetPyAnimation4 from '../../Resources/ProjectAnimations/budgetPyAnimation4.gif'
import budgetPyAnimation5 from '../../Resources/ProjectAnimations/budgetPyAnimation5.gif'
import budgetPyAnimation6 from '../../Resources/ProjectAnimations/budgetPyAnimation6.gif'
import budgetPyRouteTree from '../../Resources/ProjectImages/budgetPyRouteTree.png'
import budgetPyComponentTree from '../../Resources/ProjectImages/budgetPyComponentTree.png'


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
            <SummaryBlock summary={TextBlocks.budgetWeb}
                          setup={{
                            'frontend':{
                                'steps':[
                                    'Uses Node Package Manager',
                                    'Pull the github repo to a local directory',
                                    'Open terminal and cd into the directory',
                                    'Run "npm install" to install dependencies',
                                    'Run npm start to boot app on localhost',
                                    'Optionally, run "npm build" for minified build files, then run serve -s build to boot up',
                                    'With your opened app, the FIRST thing you need to do is "Initialize Table" with a file matching the required columns. You need at least one row of initial values. After that you are set!'
                                ]
                            },
                            'backend':{
                                'steps':[
                                    'Uses Python (Prefereably with Anaconda)',
                                    'Pull the github repo to a local directory',
                                    'Open terminal and cd into the directory',
                                    'If using Anaconda, run "conda env create -f environment.yml" to create a conda environment named "budget" by default',
                                    'After the above, run "budget activate" to activate the dependency environment',
                                    'If not using Anaconda, you may have to open the environment.yml file and install the dependecies listed in your environment manager of choice',
                                    'Finally, running "flask run" should boot up your backend'
                                ]
                            }
                        }}/>
            <FeatureBlock features={{
                              'Initialize Table with User Data': {
                                'details':[
                                    'Users can upload excel, csv, or pickle files of their data',
                                    'Uploaded tables must match required columns, and have at least one row',
                                    'Storage files settup on backend, formatted for user',
                                    'Application also "guesses" categories for user based on any categories in Type column'
                                ],
                                'animation':budgetPyAnimation2
                              },
                              'Users can add cards for auto-loading':{
                                  'details':[
                                      'New cards map downloaded file columns to Transaction History, Date and Cost columns',
                                      'Once a card is added, CSVs for that card can be loaded in and values will be inserted into the table automatically'
                                  ],
                                  'animation':budgetPyAnimation3
                              },
                              'Custom Transaction Categories':{
                                  'details':[
                                      'Users can update Type column with categories from a custom list',
                                      'These categories help with producing pie charts',
                                      'Categories can be added/deleted and customized'
                                  ],
                                  'animation':budgetPyAnimation4
                              },
                              'Charts and Graphics':{
                                  'details':[
                                      `User's finance data is plotted over time in a line chart`,
                                      'Two pie charts display proportions of spending categories, and spending categories against income categories',
                                      'The pie chart categories can be customized in the category interface',
                                      'Charts provide easy to interpret visuals of finances over time'
                                  ],
                                  'animation':budgetPyAnimation5
                              },
                              'Save, Reload, Export':{
                                  'details':[
                                      'Users can save datatable in backups and reload from the same',
                                      'Files can be saved and loaded as .csv, .xlsx, or .csv',
                                      'Files can also be exported for download as the same filetypes',
                                      'Exported files can be used in other applicaitons!'
                                  ],
                                  'animation':budgetPyAnimation6
                              }
                          }}/>
            <ComponentTree images={{
                    'frontend - React Components':budgetPyComponentTree,
                    'backend - Rails Restful Routes':budgetPyRouteTree
            }}/>
        </div>
    );
}

export default BudgetWebPage;