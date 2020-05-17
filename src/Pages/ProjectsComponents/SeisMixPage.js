import React from 'react';
 
import TextBlocks from './SupportComponents/TextBlocks.js'
import TitleCard from './SupportComponents/TitleCard.js'
import TitleLeftbar from './SupportComponents/TitleLeftbar.js'
import TitleRightbar from './SupportComponents/TitleRightbar.js'
import SummaryBlock from './SupportComponents/SummaryBlock.js'
import FeatureBlock from './SupportComponents/FeatureBlock.js'
import ComponentTree from './SupportComponents/ComponentTree.js'
import componentTreeImg from '../../Resources/ProjectImages/smComponentTree.png'
import smAnimation1 from '../../Resources/ProjectAnimations/smAnimation1.gif'
import smAnimation2 from '../../Resources/ProjectAnimations/smAnimation2.gif'
import smAnimation3 from '../../Resources/ProjectAnimations/smAnimation3.gif'
import smAnimation4 from '../../Resources/ProjectAnimations/smAnimation4.gif'
import smAnimation5 from '../../Resources/ProjectAnimations/smAnimation5.gif'
 
function SeisMixPage(props) {
    return (
        <div className={'project-desc-wrapper'}>
            <TitleCard>
                <TitleLeftbar title={'SeisMix'}
                              subtitle={'USGS Seismic Event Tracker'}
                              listHash={{
                                  'Javascript - Frontend':[
                                      'React.js',
                                      'D3.js',
                                      'Chart.js',
                                      'Redux',
                                      'Topojson-Client',
                                      'React Router'
                                  ],
                                  'Ruby - Backend':[
                                      'Rails',
                                      'SQLite3',
                                      'BCrypt',
                                      'JWT',
                                      'Cloudinary',
                                      'Active Model'
                                  ]
                              }}
                              github={{
                                  'frontend':'https://github.com/griftheorange/sm-frontend',
                                  'backend':'https://github.com/griftheorange/sm-backend'
                              }}
                              demo={'https://www.youtube.com/watch?v=fy93QL0LiVM&feature=youtu.be'}/>
                <TitleRightbar gif={smAnimation1}/>
            </TitleCard>
            <SummaryBlock summary={TextBlocks.seisMix}
                          setup={{
                              'frontend':{
                                  'steps':[
                                      'Uses Node Package Manager',
                                      'Pull the github repo to a local directory',
                                      'Open terminal and cd into the directory',
                                      'Run "npm install" to install dependencies',
                                      'Run npm start to boot app on localhost',
                                      'Optionally, run "npm build" for minified build files, then run serve -s build to boot up'
                                  ]
                              },
                              'backend':{
                                  'steps':[
                                      'Uses Ruby Bundler',
                                      'Pull the github repo to a local directory',
                                      'Open terminal and cd into the directory',
                                      'Run "bundle install"',
                                      'Run "rails db:create"',
                                      'Run "rails db:create"',
                                      'Run "rails db:migrate"',
                                      'Run "rails db:seed"',
                                      `Run "${"<EDITOR>='code --wait' rails credentials:edit"}", replace <EDITOR> with your code editor of choice (i.e. VSC)`,
                                      `This opens up a credentials.yml file, in this file type "${"hmac: secret_key: 'my_secret_key'"}"`,
                                      'Run "rails s"'


                                  ]
                              }
                          }}/>
            <FeatureBlock features={{
                              'USGS API Queries': {
                                'details':[
                                    'By default displays events from past week',
                                    'Date and Magnitude ranges can be changed',
                                    'Events are plotted on charts and globe automatically after refresh',
                                    'All events are clickable, bringing you to a details page'
                                ],
                                'animation':smAnimation2
                              },
                              'GlobeView - Geographic Plot':{
                                'details':[
                                    'Plots seismic events Geographically',
                                    'Events and globe are interactive',
                                    'Clicking on Event brings up access to details',
                                    'Globe Rotation can be Toggled and Customized',
                                    'Changeable map type'
                                  ],
                                  'animation':smAnimation3
                                },
                                'User Accounts':{
                                    'details':[
                                        'Frequent users can create accounts and log in',
                                        'User passwords are fully encrypted on the backend using BCrypt',
                                        'User page provides an interface for a users webpage activity'
                                    ],
                                    'animation':smAnimation4
                                },
                                'Bookmarking and Commenting':{
                                    'details':[
                                        'Return Users can bookmark interesting events',
                                        'Bookmarks are organized on a Profile page map and hovering displays information',
                                        'Users can also provide "insights" on events that they visit',
                                        "A user's insights are also tracked on their profile page"
                                    ],
                                    'animation':smAnimation5
                                }
                          }}/>
            <ComponentTree image={componentTreeImg}/>
        </div>
    );
}

export default SeisMixPage;