import React from 'react';

import TextBlocks from './SupportComponents/TextBlocks.js'
import TitleCard from './SupportComponents/TitleCard.js'
import TitleLeftbar from './SupportComponents/TitleLeftbar.js'
import TitleRightbar from './SupportComponents/TitleRightbar.js'
import SummaryBlock from './SupportComponents/SummaryBlock.js'
import FeatureBlock from './SupportComponents/FeatureBlock.js'
import ComponentTree from './SupportComponents/ComponentTree.js'

import javaTodoAnimation1 from '../../Resources/ProjectAnimations/javaTodoAnimation1.gif'
import javaTodoComponentTree from '../../Resources/ProjectImages/javaTodoComponentTree.png'

function JavaTodoPage(props) {
    return (
        <div className={'project-desc-wrapper'}>
            <TitleCard>
                <TitleLeftbar title={'JavaTodo'}
                              subtitle={'Desktop Task Tracking App'}
                              listHash={{
                                  'Java':[
                                      'Amazon Correto JDK',
                                      'IntelliJ IDEA',
                                      'JavaFX',
                                      'Java Look and Feel Graphics Library'
                                  ]
                              }}
                              github={{
                                  'repo':'https://github.com/griftheorange/Java-TodoList'
                              }}/>
                <TitleRightbar gif={javaTodoAnimation1}/>
            </TitleCard>
            <SummaryBlock summary={TextBlocks.javaTodo}
                          setup={{
                              'desktop':{
                                  'steps':[
                                      'Uses the IntelliJ IDEA Development kit',
                                      'Clone the github repo to a local directory',
                                      'Open the repo in IntelliJ',
                                      'Right click on Project name, click "Open Module Settings"',
                                      'Hit the plus at the bottom for a new module, click JARs or Directories',
                                      'Select the "graphics.jar" file in the local resources folder',
                                      'Select "Classes"',
                                      'This imports the icons in the jar file and loads them into the classpath for JavaFX',
                                      "You're set to run the app!"
                                  ]
                              }
                          }}/>
            <FeatureBlock features={{
                              'Add and Delete Todo Items': {
                                'details':[
                                    'Items can be added and deleted to the list',
                                    'New list prompts the user with an ergonomic dialogue box',
                                    'Items each get a name, description, and deadline',
                                    'Items near or past their deadline are colored by the app for user alerts'
                                ],
                                'animation':javaTodoAnimation1
                              }
                          }}/>
            <ComponentTree images={{
                'Java Files':javaTodoComponentTree
            }}/>
        </div>
    );
}

export default JavaTodoPage;