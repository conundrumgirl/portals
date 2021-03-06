import { HomeExploreConfig } from 'types/portal-config'
import { SynapseConstants } from 'synapse-react-client'
import loadingScreen from '../loadingScreen'
import { CardConfiguration } from 'synapse-react-client/dist/containers/CardContainerLogic'

const unitDescription = 'Publications'
const rgbIndex = 5
export const publicationsSql = 'SELECT * FROM syn21438195'
export const publicationsEntityId = 'syn21438195'
const entityId = publicationsEntityId
const sql = publicationsSql
const facet = 'Program'

export const publicationsCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  loadingScreen,
  genericCardSchema: {
    type: 'Publication',
    title: 'title',
    subTitle: 'authors',
    secondaryLabels: ['year', 'journal', 'doi', 'grantNumber'],
  },
  secondaryLabelLimit: 4,
}

const publications: HomeExploreConfig = {
  homePageSynapseObject: {
    name: 'QueryWrapperFlattened',
    props: {
      unitDescription,
      rgbIndex,
      facet,
      loadingScreen,
      link: 'Explore/Publications',
      linkText: 'Explore Publications',
      initQueryRequest: {
        entityId,
        concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
        partMask:
          SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
          SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
        query: {
          sql,
          limit: 25,
          offset: 0,
        },
      },
    },
  },
  explorePageSynapseObject: {
    name: 'QueryWrapperPlotNav',
    props: {
      rgbIndex,
      entityId,
      shouldDeepLink: true,
      hideDownload: true,
      name: 'Publications',
      cardConfiguration: publicationsCardConfiguration,
      sql,
      facetsToPlot: ['grantNumber', 'year', 'journal'],
      // searchConfiguration: {
      //   searchable: [
      //     {
      //       columnName: 'title',
      //       hintText: 'mosaicism',
      //     },
      //     {
      //       columnName: 'authors',
      //       hintText: 'LastName',
      //     },
      //     {
      //       columnName: 'year',
      //       hintText: '2019',
      //     },
      //     {
      //       columnName: 'journal',
      //       hintText: 'Science',
      //     },
      //     {
      //       columnName: 'grantNumber',
      //       hintText: 'U01MH106874',
      //     },
      //   ],
      // },
    },
  },
}

export default publications
