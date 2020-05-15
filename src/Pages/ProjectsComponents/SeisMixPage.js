import React from 'react';
 
import TitleCard from './SupportComponents/TitleCard.js'
import TitleLeftbar from './SupportComponents/TitleLeftbar.js'
import TitleRightbar from './SupportComponents/TitleRightbar.js'
import smAnimation1 from '../../Resources/ProjectAnimations/smAnimation1.gif'

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
        </div>
    );
}

export default SeisMixPage;