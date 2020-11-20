import React from 'react';

import TextBlocksEnum from './SupportComponents/TextBlocksEnum.js'
import TitleCard from './SupportComponents/TitleCard.js'
import TitleLeftbar from './SupportComponents/TitleLeftbar.js'
import TitleRightbar from './SupportComponents/TitleRightbar.js'
import SummaryBlock from './SupportComponents/SummaryBlock.js'
import FeatureBlock from './SupportComponents/FeatureBlock.js'
import ComponentTree from './SupportComponents/ComponentTree.js'

import graphJSAnimation1 from '../../Resources/ProjectAnimations/graphJSAnimation1.gif'
import graphJSAnimation2 from '../../Resources/ProjectAnimations/graphJSAnimation2.gif'
import graphJSAnimation3 from '../../Resources/ProjectAnimations/graphJSAnimation3.gif'
import graphJSAnimation4 from '../../Resources/ProjectAnimations/graphJSAnimation4.gif'
import graphJSAnimation5 from '../../Resources/ProjectAnimations/graphJSAnimation5.gif'
import graphJSRouteTree from '../../Resources/ProjectImages/graphJSRouteTree.png'
import graphJSComponentTree from '../../Resources/ProjectImages/graphJSComponentTree.png'

function GraphJSPage(props) {
    return (
        <div className={'project-desc-wrapper'}>
            <TitleCard>
                <TitleLeftbar title={'Graph.js'}
                              subtitle={'Custom Graph Generator'}
                              listHash={{
                                  'Javascript - Frontend':[
                                      'Vanilla Javascript',
                                      'D3.js'
                                  ],
                                  'Ruby - Backend':[
                                      'Rails',
                                      'SQLite3',
                                      'Cloudinary',
                                      'Active Model Serializers'
                                  ]
                              }}
                              github={{
                                  'frontend':'https://github.com/griftheorange/graph-JS-frontent',
                                  'backend':'https://github.com/griftheorange/graph-JS-backend'
                              }}
                              demo={'https://youtu.be/ua4csPpWLk8'}
                              blog={'https://medium.com/better-programming/d3-responsive-and-dynamic-visualizations-for-data-and-other-easy-recipes-68e37b451822?source=friends_link&sk=1f369ccf8c1108d2d753e3908f6ec85d'}/>
                <TitleRightbar gif={graphJSAnimation1}/>
            </TitleCard>
            <SummaryBlock summary={TextBlocksEnum.graphJS}
                          setup={{
                              'frontend':{
                                  'steps':[
                                      'Clone the github repo to a local directory',
                                      'Find the index.html file in the pulled repo',
                                      "Click and drag this file into your web browser's URL bar"
                                  ]
                              },
                              'backend':{
                                  'steps':[
                                      'Uses Ruby Bundler, Cloudinary Account',
                                      'Clone the github repo to a local directory',
                                      'Open terminal and cd into the directory',
                                      'Run "bundle install"',
                                      'Run "rails db:create"',
                                      'Run "rails db:migrate"',
                                      '(Optional) Run "rails db:seed"',
                                      'Run "rails s"',
                                      'If you seeded, user account "griff" password "g" should exist by default. Otherwise you can make your own',
                                      'In "/app/controllers/datasets_controller.rb" edit the "uploadToCloud" method. Here you put your Cloudinary account information to connect to your account',
                                      'If you prefer an alternative storage method, you can also edit this method in any way. It is passed the file to be stored and returns a pointer to it'
                                  ]
                              }
                          }}/>
            <FeatureBlock features={{
                              'Upload Data-tables': {
                                'details':[
                                    'Users can upload CSV files as datasets',
                                    'Data file is saved in a Cloud server (provided by Cloudinary)',
                                    'The app automatically parses the file and renders a table for ease-of-viewing',
                                    'Users can always access old datasets, or delete unneeded ones'
                                ],
                                'animation':graphJSAnimation2
                              },
                              'Line Graph Generation': {
                                'details':[
                                    'Sequential data can be made into line charts',
                                    'Users can select a line chart in New Graphs',
                                    'Users can add any number of series',
                                    'Columns or Rows can be selected as the values for the x-axis or series'
                                ],
                                'animation':graphJSAnimation3
                              },
                              'Bar Chart Generation':{
                                  'details':[
                                    'Categorical data can be made into bar charts',
                                    'Users select bar chart in New Graphs',
                                    'Users can also add multiple series for bar charts',
                                    'App automatically aggregates categories into sums, and diplays processed data'
                                  ],
                                  'animation':graphJSAnimation4
                              },
                              'Pie Chart Generation':{
                                  'details':[
                                      'Categorical data can also be made into pie charts',
                                      'Pie charts limited to one series',
                                      'Pie chart accepts negative values (in red) and plots them counter to positive values (in green)'
                                  ],
                                  'animation':graphJSAnimation5
                              }
                          }}/>
            <ComponentTree images={{
                    'frontend - Javascript Files':graphJSComponentTree,
                    'backend -  Rails Restful Routes':graphJSRouteTree
            }}/>
        </div>
    );
}

export default GraphJSPage;