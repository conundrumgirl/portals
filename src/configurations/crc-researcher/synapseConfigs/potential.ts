import { SynapseConfig } from 'types/portal-config'
import facetAliases from '../facetAliases'
import handleParticipantWorkflowChange from '../handleParticipantWorkflowChange'
import { baseDataSql, allFacetsToPlot } from './uncategorized'

const rgbIndex = 0
export const dataSql = `${baseDataSql} 'Potential'`
export const dataEntityId = 'syn22154087'
const entityId = dataEntityId
const sql = dataSql

export const potential: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    entityId,
    shouldDeepLink: true,
    sql,
    name: 'Potential Participants',
    facetAliases,
    facetsToPlot: allFacetsToPlot,
    tableConfiguration: {
      isRowSelectionVisible: true
    },
    visibleColumnCount: 10,
    customControls: [
      {
        buttonText: 'Send lab invitation',
        classNames: 'exampleClassNameToAddToButton',
        onClick: (async (event) => {
          handleParticipantWorkflowChange(event, 'Invited')
        }),
      },
      {
        buttonText: 'Move to uncategorized',
        classNames: 'exampleClassNameToAddToButton',
        onClick: (async (event) => {
          handleParticipantWorkflowChange(event, 'Uncategorized')
        }),
      }]
  },
}



export default potential
