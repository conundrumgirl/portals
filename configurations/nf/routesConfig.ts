import { GenericRoute } from '../types/portal-config'
import { SynapseConstants } from 'synapse-react-client'
import { datasets, files, studies, publications, tools, funders } from './synapseConfigs'
import { studiesSql, studiesCardConfiguration } from './synapseConfigs/studies'
import { datasetsSql } from './synapseConfigs/datasets'
import { publicationsSql, publicationsCardConfiguration } from './synapseConfigs/publications'
import routeButtonControlWrapperProps from './routeButtonControlWrapperProps'
import loadingScreen from './loadingScreen'
import { ntap } from './synapseConfigs/organizationConfigs/ntap'
import { dhartSpore } from './synapseConfigs/organizationConfigs/dhart-spore'
import { ctf } from './synapseConfigs/organizationConfigs/ctf'

const limit = 3

const routes: GenericRoute [] = [
  {
    name: 'Home',
    to: '/',
    isNested: false,
    synapseConfigArray: [
      {
        name: 'StatefulButtonControlWrapper',
        title: 'EXPLORE PORTAL',
        props: {
          colors: [
            '#119488',
            '#58A058',
            '#407BA0',
            '#5BB0B5',
          ],
          configs: [
            {
              name: 'Datasets', synapseConfigArray: datasets.homePageSynapseObject
            },
            {
              name: 'Files', synapseConfigArray: files.homePageSynapseObject
            },
            {
              name: 'Studies', synapseConfigArray: studies.homePageSynapseObject
            },
            {
              name: 'Publications', synapseConfigArray: publications.homePageSynapseObject
            }
          ]
        }
      },
      {
        name: 'CardContainerLogic',
        title: 'NEW STUDIES',
        link: '/Explore/Studies',
        props: {
          limit,
          loadingScreen,
          sql: studiesSql,
          ...studiesCardConfiguration
        }
      },
      {
        name: 'CardContainerLogic',
        title: 'NEW PUBLICATIONS',
        link: '/Explore/Publications',
        props: {
          limit,
          loadingScreen,
          sql: publicationsSql,
          ...publicationsCardConfiguration
        }
      },
      {
        name: 'CardContainerLogic',
        title: 'New Datasets',
        link: '/Explore/Datasets',
        props: {
          limit,
          loadingScreen,
          sql: datasetsSql,
          type: SynapseConstants.DATASET
        }
      },
      {
        name: 'CardContainerLogic',
        title: 'TOOLS',
        link: '/Explore/Tools',
        props: {
          limit,
          loadingScreen,
          sql: tools.sql,
          type: tools.type
        }
      },
      {
        name: 'CardContainerLogic',
        title: 'ORGANIZATIONS',
        props: {
          limit,
          loadingScreen,
          sql: funders.sql,
          type: funders.type
        }
      }
    ]
  },
  {
    name: 'Explore',
    isNested: true,
    routes: [
      {
        name: 'Datasets',
        isNested: false,
        to: '/Explore/Datasets',
        synapseConfigArray: [
          {
            ...routeButtonControlWrapperProps,
            props: {
              ...routeButtonControlWrapperProps.props,
              synapseConfig: datasets.explorePageSynapseObject
            }
          }
        ]
      },
      {
        name: 'Files',
        isNested: false,
        to: '/Explore/Files',
        synapseConfigArray: [
          {
            ...routeButtonControlWrapperProps,
            props: {
              ...routeButtonControlWrapperProps.props,
              synapseConfig: files.explorePageSynapseObject
            }
          }
        ]
      },
      {
        name: 'Studies',
        isNested: false,
        to: '/Explore/Studies',
        synapseConfigArray: [
          {
            ...routeButtonControlWrapperProps,
            props: {
              ...routeButtonControlWrapperProps.props,
              synapseConfig: studies.explorePageSynapseObject
            }
          }
        ]
      },
      {
        name: 'Publications',
        isNested: false,
        to: '/Explore/Publications',
        synapseConfigArray: [
          {
            ...routeButtonControlWrapperProps,
            props: {
              ...routeButtonControlWrapperProps.props,
              synapseConfig: publications.explorePageSynapseObject
            }
          }
        ]
      }
    ]
  },
  {
    name: 'Organizations',
    isNested: true,
    routes: [ctf, ntap, dhartSpore]
  },
  {
    name: 'About',
    to: '/About',
    isNested: false,
    synapseConfigArray: [
      {
        name: 'Markdown',
        title: 'About',
        props: {
          ownerId:'syn5702691',
          wikiId:'583906'
        }
      }
    ]
  }
]

export default routes
